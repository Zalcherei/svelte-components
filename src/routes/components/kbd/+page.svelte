<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Kbd from '$lib/kbd/kbd.svelte';

	let code = `<Kbd>Ctrl</Kbd>
  <Kbd>+</Kbd>
  <Kbd>Shift</Kbd>`;
</script>

<svelte:head>
	<title>Svelte Components - KBD</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Kbd>Ctrl</Kbd>
	<Kbd>+</Kbd>
	<Kbd>Shift</Kbd>
</HighlightDisplay>
<Highlight {code} />
