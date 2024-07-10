<script>
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Dropdown from '$lib/dropdown/dropdown.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import MenuItem from '$lib/menu/menu-item.svelte';
	import Menu from '$lib/menu/menu.svelte';

	let code = `<Dropdown variant="text" title="Dropdown">
    <Button variant="text" href="/">Item 1</Button>
    <Button variant="text" href="/">Item 2</Button>
    <Button variant="text" href="/">Item 3</Button>
    <Button variant="text" href="/">Item 4</Button>
  </Dropdown>`;
</script>

<svelte:head>
	<title>Svelte Components - Dropdown</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Dropdown variant="text" title="Dropdown">
		<Button variant="text" href="{base}/">Item 1</Button>
		<Button variant="text" href="{base}/">Item 2</Button>
		<Button variant="text" href="{base}/">Item 3</Button>
		<Button variant="text" href="{base}/">Item 4</Button>
	</Dropdown>
</HighlightDisplay>
<Highlight {code} />
