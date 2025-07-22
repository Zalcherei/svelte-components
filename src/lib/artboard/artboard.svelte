<script lang="ts">
	import type { ArtboardProps } from '$lib/artboard/types';
	import { cn } from '$lib/utils';

	let { class: className, width = '0', height = '0' }: ArtboardProps = $props();
</script>

<div
	class={cn(
		'h-{height} w-{width} flex items-center justify-center rounded-md border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800',
		className
	)}
>
	{height}x{width}
</div>
