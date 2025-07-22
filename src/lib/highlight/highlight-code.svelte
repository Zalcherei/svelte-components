<script lang="ts">
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.min.css';
	import DOMPurify from 'dompurify';
	import type { HighlightCodeProps } from '$lib/highlight/types';

	let { language = 'html', highlightedCode, code = '' }: HighlightCodeProps = $props();

	onMount(() => {
		const rawHighlightedCode = Prism.highlight(code, Prism.languages[language], 'html');
		highlightedCode = DOMPurify.sanitize(rawHighlightedCode);
	});
</script>

<div class="col-span-2 border-t border-gray-200 p-2 dark:border-neutral-700">
	<pre
		class="overflow-hidden rounded-md border-x bg-neutral-800 pt-3 pb-2 text-white dark:border-neutral-700">
  {@html highlightedCode}
</pre>
</div>
