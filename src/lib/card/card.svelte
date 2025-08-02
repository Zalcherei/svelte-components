<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<div
	class={cn('flex w-full flex-col rounded-md border bg-sidebar text-sidebar-foreground', className)}
>
	{@render children?.()}
</div>
