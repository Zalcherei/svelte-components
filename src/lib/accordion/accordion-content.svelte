<script lang="ts">
	import { slide } from 'svelte/transition';
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils';
	import type { AccordionContentProps, Context } from '$lib/types';

	const {
		children,
		params = {},
		transition = slide,
		class: className
	}: AccordionContentProps = $props();

	const { open } = getContext<Context>('accordion');
</script>

{#if $open}
	<div class={cn('p-4', $open ? 'border-t' : '', className)} transition:transition={params}>
		{@render children?.()}
	</div>
{/if}
