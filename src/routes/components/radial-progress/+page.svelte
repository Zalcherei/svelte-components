<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import RadialProgress from '$lib/radial-progress/radial-progress.svelte';

	let code = `<RadialProgress progress={75} theme="light" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radial progress</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<RadialProgress progress={75} theme="light" />
</HighlightDisplay>
<Highlight {code} />
