import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/Exports.jsx'),
            '@pages': path.resolve(__dirname, 'src/pages/Exports.jsx'),
            '@router': path.resolve(__dirname, 'src/router/Router.jsx'),
            '@store': path.resolve(__dirname, 'src/store/store.js'),
            '@thunks': path.resolve(__dirname, 'src/store/thunks.js'),
            '@slices': path.resolve(__dirname, 'src/store/slices/exports.js'),
        }
    },
    plugins: [react()],
})
