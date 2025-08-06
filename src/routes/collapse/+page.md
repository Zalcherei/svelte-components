<script>
  import Collapse from '$lib/collapse/collapse.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Collapse</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Collapse" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/collapse">
{#snippet display()}
<div class="w-full">
  <Collapse title="Collapse">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
  </Collapse>
  <Collapse title="Collapse">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
  </Collapse>
  <Collapse title="Collapse">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
  </Collapse>
</div>
{/snippet}

```html
<Collapse title="Collapse">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
</Collapse>
<Collapse title="Collapse">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
</Collapse>
<Collapse title="Collapse">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
</Collapse>
```
</Mdsvex>
