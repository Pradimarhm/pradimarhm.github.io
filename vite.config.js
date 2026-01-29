import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// const flowbiteReact = require("flowbite-react/plugin/vite");
// import flowbiteReact from 'flowbite-react/plugin' 

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    react(), // require('flowbite/plugin')
    tailwindcss(), 
    // flowbiteReact()
  ],
})