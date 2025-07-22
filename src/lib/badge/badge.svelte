<script lang="ts">
	import type { BadgeProps } from '$lib/badge/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: BadgeProps = $props();
</script>

<span
	class={cn(
		'flex items-center justify-center rounded-full bg-gray-100 px-3 text-sm dark:bg-neutral-800',
		className
	)}
>
	{@render children?.()}
</span>
