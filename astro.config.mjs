import { defineConfig } from 'astro/config';

// Served by GitHub Pages from the mathi1322/mathi1322.github.io repo, at the root.
export default defineConfig({
  site: 'https://mathi1322.github.io',
  // Old project URLs, kept working after the products were renamed.
  redirects: {
    '/projects/ocr-billing': '/projects/billcheck/',
    '/projects/exam-answer-checker': '/projects/scorecheck/',
  },
});
