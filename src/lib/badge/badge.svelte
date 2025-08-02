<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<span
	class={cn(
		'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent bg-primary px-2 py-0.5 text-xs font-medium whitespace-nowrap text-primary-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 [a&]:hover:bg-primary/90',
		className
	)}
>
	{@render children?.()}
</span>
