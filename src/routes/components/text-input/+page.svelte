<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import TextInput from '$lib/text-input/text-input.svelte';

	let code = `<TextInput placeholder="What's on your mind?" />`;
</script>

<svelte:head>
	<title>Svelte Components - Text input</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<TextInput placeholder="What's on your mind?" />
</HighlightDisplay>
<Highlight {code} />
