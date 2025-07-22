<script lang="ts">
	import { cn } from '$lib/utils';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { AccordionContext, AccordionProps } from '$lib/accordion/types';

	let { children, open: isOpen = false, class: className, variant }: AccordionProps = $props();

	const open = writable(isOpen);
	setContext<AccordionContext>('accordion', { open, toggle: () => open.update((n) => !n) });
</script>

<div
	class={cn(
		'mb-1 w-full overflow-hidden rounded-md bg-white dark:bg-neutral-800',
		variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: variant === 'shadow'
					? 'shadow'
					: '',
		className
	)}
>
	{@render children?.()}
</div>
