<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<div class={cn('flex h-16 w-full items-center border-t px-4', className)}>
	{@render children?.()}
</div>
