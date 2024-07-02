<script>
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';
	import xml from 'highlight.js/lib/languages/xml';
	import 'highlight.js/styles/atom-one-dark.css';
	hljs.registerLanguage('xml', xml);

	export let code = ``;

	let highlightedCode;

	onMount(() => {
		highlightedCode = hljs.highlight(code, { language: 'xml' }).value;
	});
</script>

<pre class="my-2 rounded-md bg-white pb-2 pt-3 dark:bg-neutral-800">
  {@html highlightedCode}
</pre>
