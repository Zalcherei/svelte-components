<script lang="ts">
	import type { AccordionProps, Context } from '$lib/types';
	import { cn } from '$lib/utils';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const { children, open: isOpen = false, class: className }: AccordionProps = $props();

	const open = writable(isOpen);
	setContext<Context>('accordion', { open, toggle: () => open.update((n) => !n) });
</script>

<div class={cn('w-full overflow-hidden rounded-md', className)}>
	{@render children?.()}
</div>
