<script lang="ts">
	import type { RangeProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { class: className }: RangeProps = $props();
</script>

<input
	class={cn('h-2 cursor-pointer appearance-none rounded-md bg-primary/80', className)}
	type="range"
/>
