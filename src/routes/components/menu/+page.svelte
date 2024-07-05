<script lang="ts">
	import { base } from '$app/paths';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import MenuItem from '$lib/menu/menu-item.svelte';
	import Menu from '$lib/menu/menu.svelte';

	let code = `<Menu>
    <MenuItem href="/">Item 1</MenuItem>
    <MenuItem href="/">Item 2</MenuItem>
    <MenuItem href="/">Item 3</MenuItem>
    <MenuItem href="/">Item 4</MenuItem>
  </Menu>`;
</script>

<svelte:head>
	<title>Svelte-Components - Menu</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Menu>
		<MenuItem href={base}>Item 1</MenuItem>
		<MenuItem href={base}>Item 2</MenuItem>
		<MenuItem href={base}>Item 3</MenuItem>
		<MenuItem href={base}>Item 4</MenuItem>
	</Menu>
</HighlightDisplay>
<Highlight {code} />
