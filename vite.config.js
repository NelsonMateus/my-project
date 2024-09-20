import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Plugin React
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'], // Arquivo agora é .jsx
            refresh: true,
        }),
        react(),
    ],
});
