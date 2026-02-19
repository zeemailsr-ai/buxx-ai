import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// THIS CONFIG IS TUNED FOR GOOGLE AI STUDIO EXPORTS
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // 1. Point to the root directory (where your index.tsx is)
    root: '.',
    publicDir: 'public',
    
    // 2. Fix the "White Screen" by handling build paths correctly
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    
    plugins: [react()],
    
    // 3. Ensure API Keys work if AI Studio sent them
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.VITE_GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    
    // 4. NETWORK ACCESS (Keeps Vercel connection stable)
    server: {
      host: true,
    }
  };
});
