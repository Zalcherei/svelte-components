<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';
	import { onMount } from 'svelte';

	export let compare: string = '';
	export let compared: string = '';

	onMount(() => {
		// set vars
		const slider = document.getElementById('range-slider') as HTMLElement;
		const image = document.getElementsByClassName('image')[1] as HTMLElement;
		const buttonRange = document.getElementsByClassName('slider-control')[0] as HTMLElement;

		// Move slider and buttonRange at change of value
		slider.addEventListener('input', (e: Event) => {
			const target = e.target as HTMLInputElement;
			const sliderPos: string = target.value;

			image.style.width = sliderPos + '%';
			buttonRange.style.left = sliderPos + '%';
		});
	});
</script>

<!-- Image Slider Container -->
<div
	class="image-slider-container relative h-[300px] w-full max-w-[800px] overflow-hidden rounded-md"
>
	<!-- Upper Image -->
	<div
		class="image background-image absolute left-0 top-0 h-full w-full bg-cover bg-center blur-sm grayscale"
		style="background: url('{compare}')"
	></div>
	<!-- Lower Image -->
	<div
		class="image foreground-image absolute left-0 top-0 h-full w-1/2 bg-cover bg-center saturate-150"
		style="background: url('{compared}')"
	></div>

	<!-- Range Input -->
	<input
		id="range-slider"
		class="range-slider absolute z-10 m-0 flex h-full w-full appearance-none items-center justify-center bg-gray-200 bg-opacity-20 outline-none"
		name="slider"
		type="range"
		min="1"
		max="100"
		value="50"
	/>

	<!-- Slider Control -->
	<div
		class="slider-control relative left-1/2 top-1/2 flex h-12 w-12 -translate-x-[60%] -translate-y-[60%] cursor-ew-resize items-center justify-center rounded-full bg-white"
	>
		<ChevronLeft />
		<ChevronRight />
	</div>
</div>

<style>
	.range-slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 6px;
		height: 800px;
		background: white;
		cursor: move;
		transition: all 300ms ease;
	}
</style>
