<script>
  import Kbd from '$lib/kbd/kbd.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - KBD</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="KBD" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/kbd">
{#snippet display()}
<Kbd>Ctrl</Kbd>
<Kbd>+</Kbd>
<Kbd>Shift</Kbd>
{/snippet}

```html
<ImageComparison
	before="https://picsum.photos/id/800/800?grayscale"
	after="https://picsum.photos/id/800/800"
	beforeAlt="Original design"
	afterAlt="Redesigned version"
	initialPosition={50}
/>
```
</Mdsvex>
