<script>
  import Avatar from '$lib/avatar/avatar.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Avatar</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Avatar" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/avatar">
{#snippet display()}
<Avatar alt="large" src="https://picsum.photos/48/48" />
{/snippet}

```html
<Avatar alt="large" src="https://picsum.photos/48/48" />
```
</Mdsvex>
