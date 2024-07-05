<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Rating from '$lib/rating/rating.svelte';

	let code = `<Rating stars={5} />`;
</script>

<svelte:head>
	<title>Svelte Components - Rating</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Rating stars={5} />
</HighlightDisplay>
<Highlight {code} />
