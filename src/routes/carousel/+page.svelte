<script>
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import ChevronRight from 'lucide-svelte/icons/chevron-right';

	let currentIndex = 0;
	let images = [
		'https://picsum.photos/800/300?1',
		'https://picsum.photos/800/300?2',
		'https://picsum.photos/800/300?3',
		'https://picsum.photos/800/300?4',
		'https://picsum.photos/800/300?5'
	];

	const showPrevImage = () => {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
	};

	const showNextImage = () => {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
	};
</script>

<svelte:head>
	<title>Svelte Components - Carousel</title>
</svelte:head>

<div class="flex justify-center">
	<div class="relative">
		{#each images as image, index}
			<img class="rounded-md {currentIndex === index ? 'block' : 'hidden'}" alt="..." src={image} />
		{/each}

		<button
			class="absolute left-0 top-[45%] inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
			on:click={showPrevImage}
		>
			<ChevronLeft />
		</button>
		<button
			class="absolute right-0 top-[45%] inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
			on:click={showNextImage}
		>
			<ChevronRight />
		</button>
	</div>
</div>
