<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Range from '$lib/range/range.svelte';

	let code = `<Range />`;
</script>

<svelte:head>
	<title>Svelte Components - Range</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Range />
</HighlightDisplay>
<Highlight {code} />
