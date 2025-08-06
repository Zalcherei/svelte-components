<script>
  import Toggle from '$lib/toggle/toggle.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Toggle</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Toggle" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/toggle">
{#snippet display()}
<Toggle id="toggle">Toggle me</Toggle>
{/snippet}

```html
<Toggle id="toggle">Toggle me</Toggle>
```
</Mdsvex>
