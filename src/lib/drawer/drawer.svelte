<script lang="ts">
	import type { DrawerProps } from '$lib/types';
	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';

	const {
		children,
		open = $bindable(false),
		params = { axis: 'x' },
		transition = slide,
		class: className
	}: DrawerProps = $props();
</script>

{#if open}
	<div
		class={cn(
			'flex h-screen w-64 min-w-64 flex-col border-r bg-sidebar text-sidebar-foreground',
			className
		)}
		transition:transition={params}
	>
		{@render children?.()}
	</div>
{/if}
