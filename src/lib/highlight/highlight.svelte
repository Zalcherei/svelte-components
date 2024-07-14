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

<pre
	class="overflow-hidden rounded-b-md border-x bg-neutral-700 pb-2 pt-3 text-white dark:border-neutral-700">
  {@html highlightedCode}
</pre>
