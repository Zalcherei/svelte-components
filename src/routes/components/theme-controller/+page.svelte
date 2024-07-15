<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import ThemeController from '$lib/theme-controller/theme-controller.svelte';

	let code = `<ThemeController />`;
</script>

<svelte:head>
	<title>Svelte Components - Swap</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<ThemeController />
</HighlightDisplay>
<Highlight {code} />
