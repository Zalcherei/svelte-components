<script lang="ts">
	import { cn } from '$lib/utils';
	import type { CardFooterProps } from '$lib/card/types';

	const { children, class: className }: CardFooterProps = $props();
</script>

<div class={cn('flex h-16 w-full items-center border-t border-gray-200 px-4', className)}>
	{@render children?.()}
</div>
