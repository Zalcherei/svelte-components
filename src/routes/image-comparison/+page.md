<script>
  import ImageComparison from '$lib/image-comparison/image-comparison.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Image Comparison</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Image Comparison" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/image-comparison">
{#snippet display()}
<ImageComparison
	before="https://picsum.photos/id/800/800?grayscale"
	after="https://picsum.photos/id/800/800"
	beforeAlt="Original design"
	afterAlt="Redesigned version"
	initialPosition={50}
/>
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
