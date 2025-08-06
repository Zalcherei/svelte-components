<script>
  import Button from '$lib/button/button.svelte';
  import Tooltip from '$lib/tooltip/tooltip.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Tooltip</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Tooltip" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/tooltip">
{#snippet display()}
<div class="flex gap-2">
	<Button class="group relative">
		Left
		<Tooltip align="left">Left tooltip</Tooltip>
	</Button>
	<Button class="group relative">
		Top
		<Tooltip align="top">Top tooltip</Tooltip>
	</Button>
	<Button class="group relative">
		Bottom
		<Tooltip align="bottom">Bottom tooltip</Tooltip>
	</Button>
	<Button class="group relative">
		Right
		<Tooltip align="right">Right tooltip</Tooltip>
	</Button>
</div>
{/snippet}

```html
<Button class="group relative">
	Left
	<Tooltip align="left">Left tooltip</Tooltip>
</Button>
<Button class="group relative">
	Top
	<Tooltip align="top">Top tooltip</Tooltip>
</Button>
<Button class="group relative">
	Bottom
	<Tooltip align="bottom">Bottom tooltip</Tooltip>
</Button>
<Button class="group relative">
	Right
	<Tooltip align="right">Right tooltip</Tooltip>
</Button>
```
</Mdsvex>
