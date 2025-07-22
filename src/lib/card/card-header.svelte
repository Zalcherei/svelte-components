<script lang="ts">
	import { cn } from '$lib/utils';
	import type { CardHeaderProps } from '$lib/card/types';

	const { children, class: className }: CardHeaderProps = $props();
</script>

<div
	class={cn(
		'flex h-16 w-full items-center justify-between border-b border-gray-200 px-4',
		className
	)}
>
	{@render children?.()}
</div>
