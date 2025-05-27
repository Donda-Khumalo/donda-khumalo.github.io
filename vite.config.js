import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: 'donda-khumalo.github.io', // 👈 Change this to your actual GitHub repo name
})
