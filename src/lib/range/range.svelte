<script lang="ts">
	import { cn } from '$lib/utils';
	import type { RangeProps } from '$lib/range/types';

	let { class: className }: RangeProps = $props();
</script>

<input
	class={cn('h-2 cursor-pointer appearance-none rounded-md bg-gray-300', className)}
	type="range"
/>
