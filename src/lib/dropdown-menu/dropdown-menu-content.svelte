<script lang="ts">
	import type { Context, DropdownMenuContentProps } from '$lib/types';
	import { cn } from '$lib/utils';
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	const {
		children,
		params = {},
		transition = fly,
		class: className
	}: DropdownMenuContentProps = $props();

	const { open } = getContext<Context>('dropdown-menu');
</script>

{#if $open}
	<div
		class={cn(
			'absolute z-50 flex flex-col overflow-hidden rounded-md bg-primary text-primary-foreground shadow [&>a]:rounded-none [&>button]:rounded-none',
			className
		)}
		transition:transition={params}
	>
		{@render children?.()}
	</div>
{/if}
