<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Skeleton from '$lib/skeleton/skeleton.svelte';

	let code = `<Skeleton />`;
</script>

<svelte:head>
	<title>Svelte Components - Skeleton</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Skeleton />
</HighlightDisplay>
<Highlight {code} />
