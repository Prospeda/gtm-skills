// Background service worker for GTM Skills extension

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Open welcome page on install
    chrome.tabs.create({
      url: 'https://gtm-skills.com/extension/welcome',
    });
  }
});

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'OPEN_SIDEBAR') {
    // Open the side panel
    if (sender.tab?.id) {
      chrome.sidePanel.open({ tabId: sender.tab.id });
    }
    sendResponse({ success: true });
  }

  if (message.type === 'GET_RECOMMENDATIONS') {
    // Forward to API
    fetchRecommendations(message.context)
      .then((data) => sendResponse({ success: true, data }))
      .catch((error) => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }

  if (message.type === 'COPY_PROMPT') {
    // Track usage
    trackPromptUsage(message.promptId, message.source);
    sendResponse({ success: true });
  }

  if (message.type === 'UPDATE_CONTEXT') {
    // Store page context for sidebar
    chrome.storage.local.set({ pageContext: message.context });
    sendResponse({ success: true });
  }

  return false;
});

// Fetch recommendations from API
async function fetchRecommendations(context: Record<string, string>) {
  const params = new URLSearchParams();
  Object.entries(context).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  const response = await fetch(
    `https://gtm-skills.com/api/v1/prompts/recommend?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

// Track prompt usage (for analytics)
function trackPromptUsage(promptId: string, source: string) {
  // Store locally for now
  chrome.storage.local.get('usage', (result) => {
    const usage = result.usage || [];
    usage.push({
      promptId,
      source,
      timestamp: Date.now(),
    });
    // Keep last 100 entries
    chrome.storage.local.set({ usage: usage.slice(-100) });
  });
}

// Handle side panel behavior
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error('Side panel error:', error));

// Context menu for quick access
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'gtm-skills-prompt',
    title: 'Get GTM Skills prompts for this',
    contexts: ['selection', 'page'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'gtm-skills-prompt' && tab?.id) {
    chrome.sidePanel.open({ tabId: tab.id });

    // If text is selected, use it as context
    if (info.selectionText) {
      chrome.storage.local.set({
        pageContext: {
          type: 'selection',
          data: { selectedText: info.selectionText },
          timestamp: Date.now(),
        },
      });
    }
  }
});
