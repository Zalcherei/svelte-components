<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronLeftIcon from '$lib/icons/chevron-left.svelte';
	import ChevronRightIcon from '$lib/icons/chevron-right.svelte';

	let { currentIndex = 0, images = [] } = $props();

	function showPrevImage() {
		currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
	}

	function showNextImage() {
		currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
	}
</script>

<div class="relative">
	{#each images as image, index}
		<img class="rounded-md {currentIndex === index ? 'block' : 'hidden'}" alt="..." src={image} />
	{/each}

	<Button
		class="!absolute top-[45%] left-0"
		size="icon"
		onclick={showPrevImage}
		icon={ChevronLeftIcon}
	/>
	<Button
		class="!absolute top-[45%] right-0"
		size="icon"
		onclick={showNextImage}
		icon={ChevronRightIcon}
	/>
</div>
