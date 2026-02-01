// Chrome storage utilities

export interface UserSettings {
  enabled: boolean;
  showFab: boolean;
  autoDetect: boolean;
  preferredPromptCount: number;
  recentPrompts: string[];
}

const DEFAULT_SETTINGS: UserSettings = {
  enabled: true,
  showFab: true,
  autoDetect: true,
  preferredPromptCount: 5,
  recentPrompts: [],
};

export async function getSettings(): Promise<UserSettings> {
  const result = await chrome.storage.sync.get('settings');
  return { ...DEFAULT_SETTINGS, ...result.settings };
}

export async function saveSettings(settings: Partial<UserSettings>): Promise<void> {
  const current = await getSettings();
  await chrome.storage.sync.set({
    settings: { ...current, ...settings },
  });
}

export async function addRecentPrompt(promptId: string): Promise<void> {
  const settings = await getSettings();
  const recent = [promptId, ...settings.recentPrompts.filter((id) => id !== promptId)].slice(0, 10);
  await saveSettings({ recentPrompts: recent });
}

// Context storage for current page
export interface PageContext {
  url: string;
  type: 'linkedin-profile' | 'linkedin-post' | 'gmail-compose' | 'gmail-thread' | 'unknown';
  data: Record<string, string>;
  timestamp: number;
}

export async function savePageContext(context: PageContext): Promise<void> {
  await chrome.storage.local.set({ pageContext: context });
}

export async function getPageContext(): Promise<PageContext | null> {
  const result = await chrome.storage.local.get('pageContext');
  return result.pageContext || null;
}
