<script lang="ts">
	import Artboard from '$lib/artboard/artboard.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Artboard height="96" width="64" />`;
</script>

<svelte:head>
	<title>Svelte Components - Artboard</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Artboard height="96" width="64" />
</HighlightDisplay>
<Highlight {code} />
