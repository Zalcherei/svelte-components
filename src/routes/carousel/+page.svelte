<script>
	import Carousel from '$lib/carousel/carousel.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let images = [
		'https://picsum.photos/800/300?1',
		'https://picsum.photos/800/300?2',
		'https://picsum.photos/800/300?3',
		'https://picsum.photos/800/300?4',
		'https://picsum.photos/800/300?5'
	];

	let code = `let images = [...]
  <Carousel {images} />`;
</script>

<svelte:head>
	<title>Svelte Components - Carousel</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Carousel {images} />
	</div>
	<Highlight {code} />
</div>
