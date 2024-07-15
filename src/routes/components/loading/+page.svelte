<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Loading from '$lib/loading/loading.svelte';

	let code = `<Loading />`;
</script>

<svelte:head>
	<title>Svelte Components - Loading</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Loading />
</HighlightDisplay>
<Highlight {code} />
