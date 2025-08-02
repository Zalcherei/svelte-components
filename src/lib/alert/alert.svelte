<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: BaseProps = $props();
</script>

<div
	class={cn(
		'flex h-16 w-full items-center rounded-md bg-primary px-4 text-primary-foreground',
		className
	)}
>
	{@render children?.()}
</div>
