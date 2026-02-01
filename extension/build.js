const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const isWatch = process.argv.includes('--watch');

// Ensure dist directories exist
const dirs = ['dist', 'dist/content'];
dirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Build configuration
const buildOptions = {
  bundle: true,
  minify: !isWatch,
  sourcemap: isWatch,
  target: ['chrome90'],
  format: 'esm',
};

// Build content scripts
async function buildContentScripts() {
  await esbuild.build({
    ...buildOptions,
    entryPoints: [
      'src/content/linkedin.ts',
      'src/content/gmail.ts',
    ],
    outdir: 'dist/content',
    format: 'iife', // Content scripts need IIFE
  });
}

// Build background service worker
async function buildBackground() {
  await esbuild.build({
    ...buildOptions,
    entryPoints: ['src/background/service-worker.ts'],
    outfile: 'dist/background.js',
    format: 'esm',
  });
}

// Copy static files
function copyStatic() {
  // Copy CSS
  const cssContent = `
/* GTM Skills Extension Styles */
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
}
`;
  fs.writeFileSync(path.join(__dirname, 'dist/content/styles.css'), cssContent);
}

// Main build
async function build() {
  console.log('Building GTM Skills extension...');

  try {
    await Promise.all([
      buildContentScripts(),
      buildBackground(),
    ]);
    copyStatic();
    console.log('Build complete!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Watch mode
if (isWatch) {
  console.log('Watching for changes...');
  // For now, just build once. Could add chokidar for file watching.
  build();
} else {
  build();
}
