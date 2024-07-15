<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Drawer class="max-h-48">
  	<Button variant="text" label="Item 1" />
  	<Button variant="text" label="Item 2" />
  	<Button variant="text" label="Item 3" />
  	<Button variant="text" label="Item 4" />
  </Drawer>`;
</script>

<svelte:head>
	<title>Svelte-Components - Drawer</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Drawer class="max-h-48">
		<Button variant="text" label="Item 1" />
		<Button variant="text" label="Item 2" />
		<Button variant="text" label="Item 3" />
		<Button variant="text" label="Item 4" />
	</Drawer>
</HighlightDisplay>
<Highlight {code} />
