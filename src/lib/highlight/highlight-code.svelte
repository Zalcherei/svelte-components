<script lang="ts">
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.min.css';
	import DOMPurify from 'dompurify';
	import { onMount } from 'svelte';
	import type { HighlightCodeProps } from '$lib/types';

	let { language = 'html', highlightedCode, code = '' }: HighlightCodeProps = $props();

	onMount(() => {
		const rawHighlightedCode = Prism.highlight(code, Prism.languages[language], 'html');
		highlightedCode = DOMPurify.sanitize(rawHighlightedCode);
	});
</script>

<pre
	class="overflow-auto border-t bg-primary text-primary-foreground dark:bg-sidebar dark:text-sidebar-primary"><code
		spellcheck="false"
		class="block p-4 font-mono wrap-normal">{@html highlightedCode}</code
	></pre>
