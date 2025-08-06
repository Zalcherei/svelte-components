import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex_config } from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess({ typescript: true }), mdsvex(mdsvex_config)],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base:
				process.env.NODE_ENV === 'production'
					? '/svelte-components'
					: process.env.BASE_PATH || '/svelte-components'
		}
	},
	extensions: ['.svelte', ...mdsvex_config.extensions]
};

export default config;
