<script>
  import Button from '$lib/button/button.svelte';
  import Drawer from '$lib/drawer/drawer.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';

	let open = $state(true);
</script>

<svelte:head>
	<title>Svelte-Components - Drawer</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Drawer" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/drawer">
{#snippet display()}
<Drawer class="max-h-48 space-y-4 p-4" bind:open>
	<Button>Item #1</Button>
	<Button>Item #2</Button>
	<Button>Item #3</Button>
	<Button>Item #4</Button>
</Drawer>
{/snippet}

```html
<Drawer class="max-h-48 space-y-4 p-4" bind:open>
	<Button>Item #1</Button>
	<Button>Item #2</Button>
	<Button>Item #3</Button>
	<Button>Item #4</Button>
</Drawer>
```
</Mdsvex>
