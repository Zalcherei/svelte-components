<script lang="ts">
	import Checkbox from '$lib/checkbox/checkbox.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Checkbox>Checkbox</Checkbox>`;
</script>

<svelte:head>
	<title>Svelte Components - Checkbox</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Checkbox>Checkbox</Checkbox>
</HighlightDisplay>
<Highlight {code} />
