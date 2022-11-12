import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});

// https://www.figma.com/file/YPfCQqBKGQCUw7lA6MwAOM/react-work-two-(Copy)?node-id=0%3A1&t=NnZNa6jNYPpXmNuo-0
