<script>
  import Progress from '$lib/progress/progress.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Progress</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Progress" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/progress">
{#snippet display()}
<Progress value="50" />
{/snippet}

```html
<Progress value="50" />
```
</Mdsvex>
