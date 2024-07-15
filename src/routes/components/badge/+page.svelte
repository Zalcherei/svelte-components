<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Badge from '$lib/badge/badge.svelte';

	let code = `<Badge>Badge</Badge>`;
</script>

<svelte:head>
	<title>Svelte Components - Badge</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Badge>Badge</Badge>
</HighlightDisplay>
<Highlight {code} />
