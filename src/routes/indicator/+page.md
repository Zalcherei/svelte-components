<script>
  import Button from '$lib/button/button.svelte';
  import Indicator from '$lib/indicator/indicator.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Indicator</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Indicator" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/indicator">
{#snippet display()}
<Button class="relative">
	Button
	<Indicator />
</Button>
{/snippet}

```html
<Button class="relative">
	Button
	<Indicator />
</Button>
```
</Mdsvex>
