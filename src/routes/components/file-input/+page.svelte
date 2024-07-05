<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import FileInput from '$lib/file-input/file-input.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<FileInput />`;
</script>

<svelte:head>
	<title>Svelte Components - File input</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<FileInput />
</HighlightDisplay>
<Highlight {code} />
