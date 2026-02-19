import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // 1. TELLS VITE YOUR FILES ARE HERE (FIXES WHITE SCREEN)
    root: '.',
    publicDir: 'public',
    
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    
    plugins: [react()],
    
    // 2. PASSES YOUR API KEYS SAFELY
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    
    server: {
      host: true,
    }
  };
});
