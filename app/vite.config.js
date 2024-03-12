import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});

// import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [svelte()], 
// 	build: {
// 		entry: 'src/app.html',
// 		outDir: './docs', // relative to index.html
// 		// emptyOutDir: true, // true if outDir is inside root. if outDir is not inside root, uncomment this.
// 	}
// })

