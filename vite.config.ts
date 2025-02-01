// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [react()],
//     build: {
//       outDir: 'public/build',
//     },
//     server: {
//       proxy: {
//         '/app': 'http://localhost',
//       },
//     },
//     resolve: {
//         alias: {
//             "@": "/resources/js",
//         },
//     },
// });


// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.js'],
//             refresh: true,
//         }),
//     ],
// });
import { defineConfig ,loadEnv} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
 
export default ({ mode }: any) => {
    const ENV = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
    plugins: [
        laravel([
            'resources/src/app.tsx',
        ]),
        react(),
    ],
    resolve: {
        alias: {
            // "@/*": "/resources/src/*",
            '@': path.resolve(__dirname, 'resources/src'), 
        },
    },
    define: {
      "process.env": ENV,
      process: {
        env: ENV,
      },
    },
})
}