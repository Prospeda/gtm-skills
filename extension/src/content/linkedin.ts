// LinkedIn content script for GTM Skills extension

import { detectIndustry, detectPersona } from '../lib/api';

interface LinkedInProfile {
  name: string;
  title: string;
  company: string;
  location?: string;
  about?: string;
  connectionDegree?: string;
}

// Check if we're on a profile page
function isProfilePage(): boolean {
  return window.location.pathname.startsWith('/in/');
}

// Extract profile data from the page
function extractProfileData(): LinkedInProfile | null {
  try {
    // Name
    const nameEl = document.querySelector('.text-heading-xlarge');
    const name = nameEl?.textContent?.trim() || '';

    // Title/Headline
    const titleEl = document.querySelector('.text-body-medium.break-words');
    const title = titleEl?.textContent?.trim() || '';

    // Company (from experience or headline)
    let company = '';
    const experienceSection = document.querySelector('[data-section="experience"]');
    if (experienceSection) {
      const companyEl = experienceSection.querySelector('.t-bold span[aria-hidden="true"]');
      company = companyEl?.textContent?.trim() || '';
    }
    // Fallback: try to extract from headline
    if (!company && title.includes(' at ')) {
      company = title.split(' at ').pop()?.trim() || '';
    }

    // Location
    const locationEl = document.querySelector('.text-body-small.inline.t-black--light.break-words');
    const location = locationEl?.textContent?.trim();

    // About section
    const aboutSection = document.querySelector('[data-section="about"]');
    const aboutEl = aboutSection?.querySelector('.inline-show-more-text');
    const about = aboutEl?.textContent?.trim();

    // Connection degree
    const connectionEl = document.querySelector('.dist-value');
    const connectionDegree = connectionEl?.textContent?.trim();

    if (!name) return null;

    return {
      name,
      title,
      company,
      location,
      about,
      connectionDegree,
    };
  } catch (error) {
    console.error('GTM Skills: Error extracting profile data', error);
    return null;
  }
}

// Create and inject the floating action button
function injectFAB(): void {
  // Check if FAB already exists
  if (document.getElementById('gtm-skills-fab')) return;

  const fab = document.createElement('div');
  fab.id = 'gtm-skills-fab';
  fab.innerHTML = `
    <button class="gtm-fab-button" title="Get GTM Skills prompts">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  `;

  fab.addEventListener('click', handleFABClick);
  document.body.appendChild(fab);
}

// Handle FAB click
async function handleFABClick(): Promise<void> {
  const profile = extractProfileData();

  if (profile) {
    // Build context for recommendations
    const context = {
      type: 'linkedin-profile' as const,
      data: {
        name: profile.name,
        title: profile.title,
        company: profile.company,
        persona: detectPersona(profile.title) || '',
        industry: detectIndustry(profile.company) || '',
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
  } else {
    // No profile data, just open sidebar
    chrome.runtime.sendMessage({ type: 'OPEN_SIDEBAR' });
  }
}

// Remove FAB when navigating away from profile
function removeFAB(): void {
  const fab = document.getElementById('gtm-skills-fab');
  if (fab) {
    fab.remove();
  }
}

// Watch for navigation changes (LinkedIn is a SPA)
function watchNavigation(): void {
  let lastUrl = location.href;

  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      handleNavigation();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

// Handle navigation
function handleNavigation(): void {
  if (isProfilePage()) {
    // Wait for page to load
    setTimeout(() => {
      injectFAB();
    }, 1000);
  } else {
    removeFAB();
  }
}

// Add styles
function injectStyles(): void {
  if (document.getElementById('gtm-skills-styles')) return;

  const styles = document.createElement('style');
  styles.id = 'gtm-skills-styles';
  styles.textContent = `
    #gtm-skills-fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
    }

    .gtm-fab-button {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .gtm-fab-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5);
    }

    .gtm-fab-button:active {
      transform: scale(0.95);
    }

    .gtm-fab-button svg {
      width: 24px;
      height: 24px;
    }
  `;

  document.head.appendChild(styles);
}

// Initialize
function init(): void {
  injectStyles();
  watchNavigation();
  handleNavigation();

  console.log('GTM Skills: LinkedIn extension loaded');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
