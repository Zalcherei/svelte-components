<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Progress from '$lib/progress/progress.svelte';

	let code = `<Progress value="50"/>`;
</script>

<svelte:head>
	<title>Svelte Components - Progress</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Progress value="50" />
</HighlightDisplay>
<Highlight {code} />
