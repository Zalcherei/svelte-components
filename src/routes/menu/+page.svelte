<script>
	import { base } from '$app/paths';
	import Highlight from '$lib/highlight/highlight.svelte';
	import MenuItem from '$lib/menu/menu-item.svelte';
	import Menu from '$lib/menu/menu.svelte';

	let code = `<Menu>
    <MenuItem href="/">Home</MenuItem>
    <MenuItem href="/">About</MenuItem>
    <MenuItem href="/">Third Link here</MenuItem>
  </Menu>`;
</script>

<svelte:head>
	<title>Svelte Components - Menu</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Menu>
			<MenuItem href={base}>Home</MenuItem>
			<MenuItem href={base}>About</MenuItem>
			<MenuItem href={base}>Third Link here</MenuItem>
		</Menu>
	</div>
	<Highlight {code} />
</div>
