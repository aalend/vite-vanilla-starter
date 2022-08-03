import { defineConfig } from 'vite';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800;900&display=swap',
    ]),
    eslint()],
});
