<script>
  import RadialProgress from '$lib/radial-progress/radial-progress.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Radial progress</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Radial progress" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/radial-progress">
{#snippet display()}
<RadialProgress progress={75} theme="light" />
{/snippet}

```html
<RadialProgress progress={75} theme="light" />
```
</Mdsvex>
