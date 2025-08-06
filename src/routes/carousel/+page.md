<script>
  import Carousel from '$lib/carousel/carousel.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';

	let images = [
		'https://picsum.photos/800/300?1',
		'https://picsum.photos/800/300?2',
		'https://picsum.photos/800/300?3',
		'https://picsum.photos/800/300?4',
		'https://picsum.photos/800/300?5'
	];
</script>

<svelte:head>
	<title>Svelte Components - Carousel</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Carousel" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/carousel">
{#snippet display()}
<Carousel {images} />
{/snippet}

```html
<Carousel {images} />
```
</Mdsvex>
