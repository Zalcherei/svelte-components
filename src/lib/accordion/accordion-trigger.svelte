<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronDownIcon from '$lib/icons/chevron-down.svelte';
	import { getContext } from 'svelte';
	import type { AccordionContext, AccordionTriggerProps } from '$lib/accordion/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: AccordionTriggerProps = $props();

	const { open, toggle } = getContext<AccordionContext>('accordion');
</script>

<Button class={cn('w-full justify-between', className)} onclick={toggle}>
	{@render children?.()}
	<ChevronDownIcon class={$open ? 'rotate-180 transition-transform' : 'transition-transform'} />
</Button>
