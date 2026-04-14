import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import viteImagemin from 'vite-plugin-imagemin';

// const flowbiteReact = require("flowbite-react/plugin/vite");
// import flowbiteReact from 'flowbite-react/plugin' 

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    react(), // require('flowbite/plugin')
    tailwindcss(), 
    // flowbiteReact()
    ViteImageOptimizer({
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeComments', active: true },
          { name: 'removeMetadata', active: true },
        ]
      },
      webp: {
        quality: 80,       
      },
      png: {
        quality: 80,       
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
  base: '/'
})