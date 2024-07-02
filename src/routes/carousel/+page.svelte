<script>
	import Carousel from '$lib/carousel/carousel.svelte';

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
</svelte:head>

<div class="flex justify-center">
	<Carousel {images} />
</div>
