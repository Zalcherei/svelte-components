<script>
	import Diff from '$lib/diff/diff.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Diff alt="..." src="https://picsum.photos/id/800/800/300" />`;
</script>

<svelte:head>
	<title>Svelte Components - Diff</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Diff alt="..." src="https://picsum.photos/id/800/800/300" />
</HighlightDisplay>
<Highlight {code} />
