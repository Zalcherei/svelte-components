<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Stat from '$lib/stat/stat.svelte';

	let code = `<Stat title="Total Page Views" stat="89,900" subtitle="5% more than last month" />`;
</script>

<svelte:head>
	<title>Svelte Components - Stat</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Stat title="Total Page Views" stat="89,900" subtitle="5% more than last month" />
</HighlightDisplay>
<Highlight {code} />
