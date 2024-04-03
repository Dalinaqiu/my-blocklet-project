import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { createBlockletPlugin } from 'vite-plugin-blocklet';
import svgr from 'vite-plugin-svgr';

function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), createBlockletPlugin(), svgr()],
    resolve: {
      alias: {
        '/@': _resolve('src'),
        '@src': _resolve('src'),
        '@utils': _resolve('src/utils'),
        '@api': _resolve('src/client'),
        '@components': _resolve('src/components'),
        '@assets': _resolve('public/images'),
        '@styles': _resolve('styles'),
        '@routes': _resolve('src/routes'),
      }
    },
  };
});
