<script lang="ts">
	import { cn } from '$lib/utils';
	import type { AlertProps } from '$lib/alert/types';

	let { children, class: className }: AlertProps = $props();
</script>

<div
	class={cn(
		'flex h-16 w-full items-center rounded-md bg-white px-4 dark:bg-neutral-800',
		className
	)}
>
	{@render children?.()}
</div>
