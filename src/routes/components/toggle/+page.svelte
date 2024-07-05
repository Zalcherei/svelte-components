<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toggle from '$lib/toggle/toggle.svelte';

	let code = `<Toggle>Toggle me</Toggle>`;
</script>

<svelte:head>
	<title>Svelte Components - Toggle</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Toggle>Toggle me</Toggle>
</HighlightDisplay>
<Highlight {code} />
