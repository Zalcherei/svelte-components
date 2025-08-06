<script>
  import { base } from '$app/paths';
  import Menu from '$lib/menu/menu.svelte';
  import MenuItem from '$lib/menu/menu-item.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte-Components - Menu</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Menu" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/menu">
{#snippet display()}
<Menu variant="col">
	<MenuItem href="{base}/menu">Item #1</MenuItem>
	<MenuItem href="{base}/menu">Item #2</MenuItem>
	<MenuItem href="{base}/menu">Item #3</MenuItem>
	<MenuItem href="{base}/menu">Item #4</MenuItem>
</Menu>
{/snippet}

```html
<Menu variant="col">
	<MenuItem href="{base}/menu">Item #1</MenuItem>
	<MenuItem href="{base}/menu">Item #2</MenuItem>
	<MenuItem href="{base}/menu">Item #3</MenuItem>
	<MenuItem href="{base}/menu">Item #4</MenuItem>
</Menu>
```
</Mdsvex>
