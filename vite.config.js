import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pages = ['index', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default defineConfig({
  base: './',
  plugins: [{
    name: 'portfolio-resume',
    apply: 'build',
    buildStart() {
      this.emitFile({
        type: 'asset',
        fileName: 'Rohith_Kondepati_Resume.pdf',
        source: readFileSync(resolve(__dirname, 'Rohith_Kondepati_Resume.pdf'))
      });
    }
  }],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map(page => [page, resolve(__dirname, `${page}.html`)])
      )
    }
  }
});
