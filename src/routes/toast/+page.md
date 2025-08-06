<script>
  import Toast from '$lib/toast/toast.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Toast</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Toast" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/toast">
{#snippet display()}
<Toast class="relative">Toast</Toast>
{/snippet}

```html
<Toast class="relative">Toast</Toast>
```
</Mdsvex>
