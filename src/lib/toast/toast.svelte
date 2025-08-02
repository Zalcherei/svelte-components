<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: BaseProps = $props();
</script>

<div
	class={cn(
		'absolute right-0 bottom-0 flex h-16 w-64 items-center rounded-md bg-sidebar p-4 text-sidebar-foreground shadow',
		className
	)}
>
	{@render children?.()}
</div>
