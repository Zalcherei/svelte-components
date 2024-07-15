<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Menu from '$lib/menu/menu.svelte';

	let code = `<Menu>
    <Button href="/">Item 1</Button>
    <Button href="/">Item 2</Button>
    <Button href="/">Item 3</Button>
    <Button href="/">Item 4</Button>
  </Menu>`;
</script>

<svelte:head>
	<title>Svelte-Components - Menu</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Menu variant="col">
		<Button variant="text" label="Item 1" href="{base}/" />
		<Button variant="text" label="Item 2" href="{base}/" />
		<Button variant="text" label="Item 3" href="{base}/" />
		<Button variant="text" label="Item 4" href="{base}/" />
	</Menu>
</HighlightDisplay>
<Highlight {code} />
