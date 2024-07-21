<script lang="ts">
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.min.css';
	import DOMPurify from 'dompurify';

	let language: string = 'html';
	let highlightedCode: string;
	export let code: string = ``;

	onMount(() => {
		const rawHighlightedCode = Prism.highlight(code, Prism.languages[language], 'html');
		highlightedCode = DOMPurify.sanitize(rawHighlightedCode);
	});
</script>

<div class="col-span-2 border-t border-gray-200 p-2">
	<pre
		class="overflow-hidden rounded-md border-x bg-neutral-800 pb-2 pt-3 text-white dark:border-neutral-700">
  {@html highlightedCode}
</pre>
</div>
