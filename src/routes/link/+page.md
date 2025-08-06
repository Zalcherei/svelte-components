<script>
  import { base } from '$app/paths';
  import Link from '$lib/link/link.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Link</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Link" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/link">
{#snippet display()}
<Link href={base}>Link</Link>
{/snippet}

```html
<Link href={base}>Link</Link>
```
</Mdsvex>
