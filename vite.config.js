import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    esbuild: {
        loader: {
            '.js': 'jsx', // Forçar todos os arquivos .js a serem tratados como JSX
        },
        include: /resources\/js\/.*\.js$/, // Apenas arquivos na pasta js
    },
});


