<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Dropdown from '$lib/dropdown/dropdown.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Dropdown variant="text" label="Dropdown">
  	<Button variant="text" label="Item 1" href="/" />
  	<Button variant="text" label="Item 2" href="/" />
  	<Button variant="text" label="Item 3" href="/" />
  	<Button variant="text" label="Item 4" href="/" />
  </Dropdown>`;
</script>

<svelte:head>
	<title>Svelte Components - Dropdown</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Dropdown variant="text" label="Dropdown">
		<Button variant="text" label="Item 1" href="{base}/" />
		<Button variant="text" label="Item 2" href="{base}/" />
		<Button variant="text" label="Item 3" href="{base}/" />
		<Button variant="text" label="Item 4" href="{base}/" />
	</Dropdown>
</HighlightDisplay>
<Highlight {code} />
