<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Carousel from '$lib/carousel/carousel.svelte';

	let images = [
		'https://picsum.photos/800/300?1',
		'https://picsum.photos/800/300?2',
		'https://picsum.photos/800/300?3',
		'https://picsum.photos/800/300?4',
		'https://picsum.photos/800/300?5'
	];

	let code = `<Carousel {images} />`;
</script>

<svelte:head>
	<title>Svelte Components - Carousel</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Carousel {images} />
</HighlightDisplay>
<Highlight {code} />
