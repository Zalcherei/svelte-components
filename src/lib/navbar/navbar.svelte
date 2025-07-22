<script lang="ts">
	import type { NavbarProps } from '$lib/navbar/types';
	import { cn } from '$lib/utils';

	let { children, class: className, variant }: NavbarProps = $props();
</script>

<div
	class={cn(
		'flex h-16 min-h-16 w-full items-center border-b border-gray-200 bg-white px-4 dark:border-neutral-700 dark:bg-neutral-800',
		variant === 'shadow' ? '!border-0 !shadow' : '',
		className
	)}
>
	{@render children?.()}
</div>
