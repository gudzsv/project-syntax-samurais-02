import cssnano from 'cssnano';
import { glob } from 'glob';
import path from 'path';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';
export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
      minify: 'terser',
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html']), cssnano()],

    resolve: {
      alias: {
        '@public': path.resolve(__dirname, './public'),
        '@partials': path.resolve(__dirname, './src/partials'),
      },
    },
  };
});
