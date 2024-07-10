<script lang="ts">
	import { onMount } from 'svelte';
	import Prism from 'prismjs';
	import 'prismjs/themes/prism-okaidia.min.css';
	let language = 'html';

	export let code = ``;

	let highlightedCode: any;

	onMount(() => {
		highlightedCode = Prism.highlight(code, Prism.languages[language], 'haml');
	});
</script>

<pre
	class="overflow-hidden rounded-b-md border-x bg-neutral-700 pb-2 pt-3 text-white dark:border-neutral-700">
  {@html highlightedCode}
</pre>
