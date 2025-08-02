<script lang="ts">
	import { cn } from '$lib/utils';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import type { TabContext, TabsProps } from '$lib/types';

	let { children, value, class: className }: TabsProps = $props();

	const open = writable(value);
	setContext<TabContext>('tabs', { open });
</script>

<div class={cn('flex flex-col', className)}>
	{@render children?.()}
</div>
