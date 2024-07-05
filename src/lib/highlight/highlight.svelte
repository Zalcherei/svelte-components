<script lang="ts">
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import xml from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/atom-one-dark.min.css';
	hljs.registerLanguage('xml', xml);

	export let code = ``;

	let highlightedCode: any;

	onMount(() => {
		highlightedCode = hljs.highlight(code, { language: 'xml' }).value;
	});
</script>

<pre
	class="overflow-hidden rounded-b-md border-x bg-neutral-800 pb-2 pt-3 text-white dark:border-neutral-700">
  {@html highlightedCode}
</pre>
