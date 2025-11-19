// vite.config.modules.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: false,
    outDir: './',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        storefront: path.resolve(__dirname, 'src/storefront/index.ts'),
        studio: path.resolve(__dirname, 'src/studio/index.ts')
      },
      preserveModules: true,
      output: {
        dir: './',
        format: 'es',
        entryFileNames: '[name]/index.js'
      },
      external: ['react', 'react-dom', 'sanity']
    }
  }
});
