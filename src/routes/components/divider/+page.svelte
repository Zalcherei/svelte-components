<script>
	import Divider from '$lib/divider/divider.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Divider />`;
</script>

<svelte:head>
	<title>Svelte Components - Divider</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Divider />
</HighlightDisplay>
<Highlight {code} />
