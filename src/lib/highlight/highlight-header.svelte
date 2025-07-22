<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HighlightHeaderProps } from '$lib/highlight/types';

	const { children, class: className }: HighlightHeaderProps = $props();
</script>

<div
	class={cn(
		'col-span-2 flex h-12 items-center justify-between gap-2 border-b border-gray-200 bg-gray-100 px-4 dark:border-neutral-700 dark:bg-neutral-800',
		className
	)}
>
	{@render children?.()}
</div>
