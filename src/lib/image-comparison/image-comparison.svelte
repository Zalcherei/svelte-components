<script lang="ts">
	import type { ImageComparisonProps } from '$lib/image-comparison/types';

	let {
		before,
		after,
		beforeAlt = 'Before image',
		afterAlt = 'After image',
		initialPosition = 50,
		...restProps
	}: ImageComparisonProps = $props();

	let position = $state(initialPosition);
	let isDragging = $state(false);

	function startDrag() {
		isDragging = true;
	}

	function stopDrag() {
		isDragging = false;
	}

	function updatePosition(e: MouseEvent | TouchEvent, container: HTMLElement) {
		const rect = container.getBoundingClientRect();
		const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
		const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
		position = (x / rect.width) * 100;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		updatePosition(e, e.currentTarget as HTMLElement);
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		updatePosition(e, e.currentTarget as HTMLElement);
	}
</script>

<!-- Image Slider Container -->
<div
	class="group relative h-96 w-full cursor-ew-resize overflow-hidden select-none"
	onmousedown={startDrag}
	onmousemove={handleMouseMove}
	onmouseup={stopDrag}
	onmouseleave={stopDrag}
	ontouchstart={startDrag}
	ontouchmove={handleTouchMove}
	ontouchend={stopDrag}
	{...restProps}
>
	<!-- Before image -->
	<img src={before} alt={beforeAlt} class="absolute inset-0 h-full w-full object-cover" />

	<!-- After image with clip-path -->
	<div
		class="absolute inset-0 h-full w-full overflow-hidden"
		style={`clip-path: inset(0 0 0 ${position}%)`}
	>
		<img src={after} alt={afterAlt} class="h-full w-full object-cover" />
	</div>

	<!-- Slider control with animation -->
	<div
		class="absolute top-0 bottom-0 w-1 rounded-full bg-white shadow-lg transition-all duration-100 ease-linear"
		style={`left: ${position}%; transform: translateX(-50%)`}
	>
		<div
			class="absolute top-1/2 -right-4 -left-4 flex h-10 -translate-y-1/2 items-center justify-center"
		>
			<div
				class="flex h-10 w-3 items-center justify-center rounded-full bg-white transition-transform duration-100 group-hover:scale-110"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4 text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						d="M8 9l4-4 4 4m0 6l-4 4-4-4"
					/>
				</svg>
			</div>
		</div>
	</div>

	<!-- Position labels -->
	<div class="bg-opacity-50 absolute bottom-4 left-4 rounded bg-black px-2 py-1 text-sm text-white">
		Before
	</div>
	<div
		class="bg-opacity-50 absolute right-4 bottom-4 rounded bg-black px-2 py-1 text-sm text-white"
	>
		After
	</div>
</div>
