<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toast from '$lib/toast/toast.svelte';

	let code = `<Toast>Toast</Toast>`;
</script>

<svelte:head>
	<title>Svelte Components - Toast</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Toast class="!relative">Toast</Toast>
</HighlightDisplay>
<Highlight {code} />
