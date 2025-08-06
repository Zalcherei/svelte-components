<script>
  import Input from '$lib/input/input.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Input</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Input" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/text-input">
{#snippet display()}
<Input type="text" placeholder="What's on your mind?" />
{/snippet}

```html
<Input type="text" placeholder="What's on your mind?" />
```
</Mdsvex>
