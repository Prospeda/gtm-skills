// Gmail content script for GTM Skills extension

import { detectIndustry } from '../lib/api';

interface EmailContext {
  to?: string;
  toName?: string;
  toDomain?: string;
  subject?: string;
  threadContext?: string;
  isReply: boolean;
}

// Check if compose window is open
function getComposeWindows(): HTMLElement[] {
  const composeWindows = document.querySelectorAll('[role="dialog"]');
  return Array.from(composeWindows).filter((el) =>
    el.querySelector('[aria-label*="To"]') || el.querySelector('[name="to"]')
  ) as HTMLElement[];
}

// Extract email context from compose window
function extractEmailContext(composeWindow: HTMLElement): EmailContext {
  const context: EmailContext = {
    isReply: false,
  };

  // To field
  const toField = composeWindow.querySelector('[name="to"], [aria-label*="To"] input');
  if (toField) {
    const toValue = (toField as HTMLInputElement).value;
    context.to = toValue;

    // Extract domain
    const emailMatch = toValue.match(/@([a-zA-Z0-9.-]+)/);
    if (emailMatch) {
      context.toDomain = emailMatch[1];
    }

    // Try to get name from chips
    const chips = composeWindow.querySelectorAll('[data-hovercard-id]');
    if (chips.length > 0) {
      const chipText = chips[0].textContent;
      if (chipText && !chipText.includes('@')) {
        context.toName = chipText.trim();
      }
    }
  }

  // Subject
  const subjectField = composeWindow.querySelector('[name="subjectbox"], input[aria-label*="Subject"]');
  if (subjectField) {
    context.subject = (subjectField as HTMLInputElement).value;
    // Check if it's a reply
    context.isReply = context.subject?.startsWith('Re:') || false;
  }

  // Thread context (for replies)
  if (context.isReply) {
    const threadMessages = document.querySelectorAll('[data-message-id]');
    if (threadMessages.length > 0) {
      const lastMessage = threadMessages[threadMessages.length - 1];
      const messageBody = lastMessage.querySelector('[data-message-id] > div > div');
      if (messageBody) {
        context.threadContext = messageBody.textContent?.slice(0, 500) || '';
      }
    }
  }

  return context;
}

// Inject GTM Skills button into compose toolbar
function injectComposeButton(composeWindow: HTMLElement): void {
  // Check if button already exists
  if (composeWindow.querySelector('.gtm-skills-compose-btn')) return;

  // Find the toolbar
  const toolbar = composeWindow.querySelector('[role="toolbar"], .btC');
  if (!toolbar) return;

  // Create button
  const button = document.createElement('div');
  button.className = 'gtm-skills-compose-btn';
  button.title = 'Get GTM Skills prompts';
  button.innerHTML = `
    <button class="gtm-gmail-btn" type="button">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;

  button.addEventListener('click', () => handleComposeButtonClick(composeWindow));

  // Insert button
  const firstChild = toolbar.firstChild;
  if (firstChild) {
    toolbar.insertBefore(button, firstChild);
  } else {
    toolbar.appendChild(button);
  }
}

// Handle compose button click
async function handleComposeButtonClick(composeWindow: HTMLElement): Promise<void> {
  const emailContext = extractEmailContext(composeWindow);

  // Build context for recommendations
  const context = {
    type: emailContext.isReply ? 'gmail-reply' : 'gmail-compose',
    data: {
      to: emailContext.to || '',
      toName: emailContext.toName || '',
      domain: emailContext.toDomain || '',
      subject: emailContext.subject || '',
      industry: emailContext.toDomain ? detectIndustry(emailContext.toDomain) || '' : '',
      isReply: String(emailContext.isReply),
      deal_stage: emailContext.isReply ? 'follow-up' : 'prospecting',
    },
    timestamp: Date.now(),
  };

  // Send context to background script
  chrome.runtime.sendMessage({
    type: 'UPDATE_CONTEXT',
    context,
  });

  // Open sidebar
  chrome.runtime.sendMessage({ type: 'OPEN_SIDEBAR' });
}

// Watch for compose windows
function watchComposeWindows(): void {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        // Check for new compose windows
        setTimeout(() => {
          const composeWindows = getComposeWindows();
          composeWindows.forEach(injectComposeButton);
        }, 500);
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Also check on initial load
  const composeWindows = getComposeWindows();
  composeWindows.forEach(injectComposeButton);
}

// Add styles
function injectStyles(): void {
  if (document.getElementById('gtm-skills-gmail-styles')) return;

  const styles = document.createElement('style');
  styles.id = 'gtm-skills-gmail-styles';
  styles.textContent = `
    .gtm-skills-compose-btn {
      display: inline-flex;
      margin-right: 8px;
    }

    .gtm-gmail-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: transform 0.2s, opacity 0.2s;
    }

    .gtm-gmail-btn:hover {
      transform: scale(1.1);
      opacity: 0.9;
    }

    .gtm-gmail-btn:active {
      transform: scale(0.95);
    }

    .gtm-gmail-btn svg {
      width: 16px;
      height: 16px;
    }
  `;

  document.head.appendChild(styles);
}

// Initialize
function init(): void {
  injectStyles();
  watchComposeWindows();

  console.log('GTM Skills: Gmail extension loaded');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
