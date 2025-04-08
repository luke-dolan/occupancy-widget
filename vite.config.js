import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      // Update the entry point to your main.js file in the src directory
      entry: resolve(__dirname, 'src/main.js'),
      name: 'OccupancyWidget',
      formats: ['iife'],
      fileName: (format) => `occupancy-widget.${format}.js`
    },
    rollupOptions: {
      external: ['raphael', 'justgage'],
      output: {
        globals: {
          raphael: 'Raphael',
          justgage: 'JustGage'
        }
      }
    },
    minify: 'terser',
  },
});