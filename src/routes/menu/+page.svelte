<script>
	import MenuItem from '$lib/menu/menu-item.svelte';
	import Menu from '$lib/menu/menu.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Menu</title>
</svelte:head>

<div class="flex justify-center">
	<Menu>
		<MenuItem href="/">Home</MenuItem>
		<MenuItem href="/">About</MenuItem>
		<MenuItem href="/">Third Link here</MenuItem>
	</Menu>
</div>
