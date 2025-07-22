<script lang="ts">
	import type { ToastProps } from '$lib/toast/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: ToastProps = $props();
</script>

<div
	class={cn(
		'absolute right-0 bottom-0 flex h-16 w-64 items-center rounded-md bg-white px-4 dark:bg-neutral-800',
		className
	)}
>
	{@render children?.()}
</div>
