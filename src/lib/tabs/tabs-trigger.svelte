<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import type { TabContext, TabsTriggerProps } from '$lib/types';
	import { cn } from '$lib/utils';
	import { getContext } from 'svelte';

	let { children, value, class: className }: TabsTriggerProps = $props();

	const { open } = getContext<TabContext>('tabs');
</script>

<Button class={cn('me-1', className)} onclick={() => open.set(value)}>
	{@render children?.()}
</Button>
