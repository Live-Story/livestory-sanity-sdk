// vite.config.modules.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: false,                 // non fare bundle unico
    outDir: 'dist',             // stessa cartella dist
    emptyOutDir: false,
    rollupOptions: {
      input: {
        storefront: path.resolve(__dirname, 'src/storefront/index.ts'),
        studio: path.resolve(__dirname, 'src/studio/index.ts')
      },
      preserveModules: true,    // mantiene la struttura dei moduli
      output: {
        dir: 'dist',            // genera dist/storefront/index.js e dist/studio/index.js
        format: 'es',
        entryFileNames: '[name]/index.js'
      },
      external: ['react', 'react-dom', 'sanity']
    }
  }
});
