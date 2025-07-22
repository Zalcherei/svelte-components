<script lang="ts">
	import { slide } from 'svelte/transition';
	import type { AccordionContentProps, AccordionContext } from '$lib/accordion/types';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils';

	const {
		children,
		params = {},
		transition = slide,
		class: className
	}: AccordionContentProps = $props();

	const { open } = getContext<AccordionContext>('accordion');
</script>

{#if $open}
	<div
		class={cn('p-4', open ? 'border-t border-gray-200 dark:border-neutral-700' : '', className)}
		transition:transition={params}
	>
		{@render children?.()}
	</div>
{/if}
