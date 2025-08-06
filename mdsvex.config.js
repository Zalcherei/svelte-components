import { defineMDSveXConfig as defineConfig, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
// import githubDark from 'shiki/themes/github-dark.mjs';

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['html', 'javascript', 'typescript']
});

export const mdsvex_config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					theme
				})
			);
			return `{@html \`${html}\` }`;
		}
	},
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: []
});
