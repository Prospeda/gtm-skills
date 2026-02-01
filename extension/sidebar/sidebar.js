// Sidebar script for GTM Skills extension

const API_BASE = 'https://gtm-skills.com/api/v1';

// DOM elements
const promptsContainer = document.getElementById('prompts-container');
const contextBadge = document.getElementById('context-badge');
const sectionTitle = document.getElementById('section-title');
const searchInput = document.getElementById('search-input');
const copiedToast = document.getElementById('copied-toast');

// State
let currentPrompts = [];
let pageContext = null;

// Initialize
async function init() {
  // Load page context
  const result = await chrome.storage.local.get('pageContext');
  pageContext = result.pageContext;

  updateContextBadge();
  loadPrompts();

  // Listen for context updates
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && changes.pageContext) {
      pageContext = changes.pageContext.newValue;
      updateContextBadge();
      loadPrompts();
    }
  });

  // Search functionality
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = e.target.value.trim();
      if (query.length > 2) {
        searchPrompts(query);
      } else if (query.length === 0) {
        loadPrompts();
      }
    }, 300);
  });
}

// Update context badge
function updateContextBadge() {
  if (!pageContext) {
    contextBadge.textContent = 'No context';
    return;
  }

  const typeLabels = {
    'linkedin-profile': 'LinkedIn Profile',
    'linkedin-post': 'LinkedIn Post',
    'gmail-compose': 'New Email',
    'gmail-reply': 'Email Reply',
    'selection': 'Selected Text',
  };

  contextBadge.textContent = typeLabels[pageContext.type] || 'Page Context';
}

// Load prompts based on context
async function loadPrompts() {
  promptsContainer.innerHTML = `
    <div class="loading">
      <div class="loading-spinner"></div>
      <div>Loading prompts...</div>
    </div>
  `;

  try {
    let prompts;

    if (pageContext?.data) {
      // Get recommendations based on context
      prompts = await getRecommendations(pageContext.data);
      sectionTitle.textContent = 'Recommended for You';
    } else {
      // Get popular prompts
      prompts = await getDefaultPrompts();
      sectionTitle.textContent = 'Popular Prompts';
    }

    currentPrompts = prompts;
    renderPrompts(prompts);
  } catch (error) {
    console.error('Error loading prompts:', error);
    promptsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">!</div>
        <div>Failed to load prompts</div>
      </div>
    `;
  }
}

// Search prompts
async function searchPrompts(query) {
  promptsContainer.innerHTML = `
    <div class="loading">
      <div class="loading-spinner"></div>
      <div>Searching...</div>
    </div>
  `;

  try {
    const response = await fetch(`${API_BASE}/prompts?search=${encodeURIComponent(query)}&limit=10`);
    const data = await response.json();

    currentPrompts = data.data;
    sectionTitle.textContent = `Results for "${query}"`;
    renderPrompts(data.data);
  } catch (error) {
    console.error('Error searching prompts:', error);
  }
}

// Get recommendations from API
async function getRecommendations(contextData) {
  const params = new URLSearchParams();

  if (contextData.persona) params.set('persona', contextData.persona);
  if (contextData.industry) params.set('industry', contextData.industry);
  if (contextData.deal_stage) params.set('deal_stage', contextData.deal_stage);
  if (contextData.name || contextData.company) {
    params.set('context', `${contextData.name || ''} ${contextData.company || ''} ${contextData.title || ''}`);
  }

  params.set('limit', '5');

  const response = await fetch(`${API_BASE}/prompts/recommend?${params.toString()}`);
  const data = await response.json();

  return data.data;
}

// Get default prompts
async function getDefaultPrompts() {
  const response = await fetch(`${API_BASE}/prompts?limit=10`);
  const data = await response.json();
  return data.data;
}

// Render prompts
function renderPrompts(prompts) {
  if (!prompts || prompts.length === 0) {
    promptsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">?</div>
        <div>No prompts found</div>
      </div>
    `;
    return;
  }

  promptsContainer.innerHTML = prompts.map((prompt, index) => `
    <div class="prompt-card" data-index="${index}">
      <div class="prompt-header">
        <div class="prompt-title">${escapeHtml(prompt.title)}</div>
        ${prompt.relevance_score ? `<span class="relevance-badge">${prompt.relevance_score}%</span>` : ''}
      </div>
      <div class="prompt-description">${escapeHtml(prompt.description)}</div>
      <div class="tags">
        ${prompt.tags.slice(0, 3).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
        ${prompt.difficulty ? `<span class="tag">${prompt.difficulty}</span>` : ''}
      </div>
      <div class="prompt-content">${escapeHtml(prompt.prompt)}</div>
      <div class="prompt-actions">
        <button class="btn btn-primary copy-btn" data-index="${index}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy
        </button>
        <button class="btn btn-secondary open-btn" data-index="${index}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          Open in Claude
        </button>
      </div>
    </div>
  `).join('');

  // Add click handlers
  document.querySelectorAll('.prompt-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't toggle if clicking buttons
      if (e.target.closest('.copy-btn') || e.target.closest('.open-btn')) return;

      card.classList.toggle('expanded');
    });
  });

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      copyPrompt(currentPrompts[index]);
    });
  });

  document.querySelectorAll('.open-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      openInClaude(currentPrompts[index]);
    });
  });
}

// Copy prompt to clipboard
async function copyPrompt(prompt) {
  try {
    await navigator.clipboard.writeText(prompt.prompt);

    // Show toast
    copiedToast.classList.add('show');
    setTimeout(() => {
      copiedToast.classList.remove('show');
    }, 2000);

    // Track usage
    chrome.runtime.sendMessage({
      type: 'COPY_PROMPT',
      promptId: prompt.id,
      source: pageContext?.type || 'sidebar',
    });
  } catch (error) {
    console.error('Failed to copy:', error);
  }
}

// Open in Claude
function openInClaude(prompt) {
  const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(prompt.prompt)}`;
  window.open(claudeUrl, '_blank');
}

// Escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Initialize when DOM is ready
init();
