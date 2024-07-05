<script>
	import Alert from '$lib/alert/alert.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Alert>Alert</Alert>`;
</script>

<svelte:head>
	<title>Svelte Components - Alert</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Alert>Alert</Alert>
</HighlightDisplay>
<Highlight {code} />
