<script lang="ts">
	import { cn } from '$lib/utils';
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { DropdownMenuContentProps, DropdownMenuContext } from '$lib/dropdown-menu/types';

	const {
		children,
		params = {},
		transition = fly,
		class: className
	}: DropdownMenuContentProps = $props();

	const { open } = getContext<DropdownMenuContext>('dropdown-menu');
</script>

{#if $open}
	<div
		class={cn(
			'absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none',
			className
		)}
		transition:transition={params}
	>
		{@render children?.()}
	</div>
{/if}
