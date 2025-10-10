import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: `dist`,
    lib: {
      entry: path.resolve(__dirname, `src/index.ts`),
      name: 'LiveStorySanity',
      formats: ['es'],
      fileName: () => 'livestory-sanity.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'sanity'],
      output: {
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts'
  }
});
