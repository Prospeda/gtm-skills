// Popup script for GTM Skills extension

// DOM elements
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const promptsUsed = document.getElementById('prompts-used');
const openSidebarBtn = document.getElementById('open-sidebar');

// Initialize
async function init() {
  // Check if extension is enabled
  const settings = await chrome.storage.sync.get('settings');
  const enabled = settings.settings?.enabled !== false;

  if (enabled) {
    statusDot.classList.remove('inactive');
    statusText.textContent = 'Extension active';
  } else {
    statusDot.classList.add('inactive');
    statusText.textContent = 'Extension disabled';
  }

  // Load usage stats
  const usage = await chrome.storage.local.get('usage');
  const usageCount = usage.usage?.length || 0;
  promptsUsed.textContent = usageCount.toString();
}

// Open sidebar
openSidebarBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    chrome.sidePanel.open({ tabId: tab.id });
    window.close();
  }
});

// Initialize
init();
