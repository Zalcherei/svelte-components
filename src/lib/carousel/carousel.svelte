<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronLeftIcon from '$lib/icons/chevron-left.svelte';
	import ChevronRightIcon from '$lib/icons/chevron-right.svelte';
	import type { CarouselProps } from '$lib/types';

	let { currentIndex = 0, images = [] }: CarouselProps = $props();

	function showPrevImage() {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
	}

	function showNextImage() {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
	}
</script>

<div class="relative">
	{#each images as image, index (index)}
		<img class="rounded-md {currentIndex === index ? 'block' : 'hidden'}" alt="..." src={image} />
	{/each}

	<Button class="absolute top-[45%] left-0" size="icon" onclick={showPrevImage}>
		<ChevronLeftIcon />
	</Button>
	<Button class="absolute top-[45%] right-0" size="icon" onclick={showNextImage}>
		<ChevronRightIcon />
	</Button>
</div>
