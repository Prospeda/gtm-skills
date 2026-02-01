# GTM Skills Chrome Extension

AI-powered sales prompts right where you work - LinkedIn, Gmail, and more.

## Features

- **LinkedIn Integration**: Floating action button on profile pages with contextual prompts
- **Gmail Integration**: Quick access in compose window for email prompts
- **Sidebar Panel**: Browse and search 2,500+ prompts
- **Contextual Recommendations**: AI-powered prompt suggestions based on page context

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
cd extension
npm install
```

### Build

```bash
# Development build
npm run build

# Watch mode (rebuilds on changes)
npm run watch
```

### Load in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select the `extension` folder

### Project Structure

```
extension/
├── manifest.json          # Chrome extension manifest
├── src/
│   ├── background/        # Service worker
│   ├── content/           # Content scripts (LinkedIn, Gmail)
│   └── lib/               # Shared utilities
├── popup/                 # Extension popup UI
├── sidebar/               # Side panel UI
├── public/icons/          # Extension icons
└── dist/                  # Built files
```

## API Integration

The extension uses the GTM Skills API at `https://gtm-skills.com/api/v1`:

- `GET /prompts` - List prompts
- `GET /prompts/recommend` - Get contextual recommendations
- `GET /categories` - List categories

## Icons

Replace the placeholder icons in `public/icons/` with actual icons:
- icon16.png (16x16)
- icon32.png (32x32)
- icon48.png (48x48)
- icon128.png (128x128)

## Publishing

1. Update version in `manifest.json`
2. Run `npm run build`
3. Zip the extension folder (excluding `node_modules`, `src/`)
4. Submit to Chrome Web Store

## License

MIT - See main repo LICENSE
