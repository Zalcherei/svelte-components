<script lang="ts">
	import type { TabContext, TabsContentProps } from '$lib/types';
	import { cn } from '$lib/utils';
	import { getContext } from 'svelte';

	let { children, value, class: className }: TabsContentProps = $props();

	const { open } = getContext<TabContext>('tabs');
</script>

{#if $open === value}
	<div class={cn('mt-2 rounded-md border bg-sidebar p-4', className)}>
		{@render children?.()}
	</div>
{/if}
