<script lang="ts">
	import { cn } from '$lib/utils';
	import type { KbdProps } from '$lib/kbd/types';

	let { children, class: className }: KbdProps = $props();
</script>

<kbd
	class={cn(
		'me-1 flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 dark:border-neutral-700 dark:bg-neutral-800',
		className
	)}
>
	{@render children?.()}
</kbd>
