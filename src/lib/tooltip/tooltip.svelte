<script lang="ts">
	import type { TooltipProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { children, class: className, align }: TooltipProps = $props();
</script>

<div
	class={cn(
		'absolute hidden min-w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground shadow group-hover:flex',
		align === 'left'
			? '-left-2 -translate-x-full'
			: align === 'top'
				? '-top-2 -translate-y-full'
				: align === 'bottom'
					? '-bottom-2 translate-y-full'
					: align === 'right'
						? '-right-2 translate-x-full'
						: '',
		className
	)}
>
	{@render children?.()}
</div>
