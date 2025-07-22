<script lang="ts">
	import type { DrawerProps } from '$lib/drawer/types';
	import { slide } from 'svelte/transition';

	let {
		children,
		open = $bindable(),
		class: className,
		params = { axis: 'x' },
		transition = slide
	}: DrawerProps = $props();
</script>

{#if open}
	<div
		class="flex h-screen w-64 flex-col overflow-y-auto border-r border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 {className}"
		transition:transition={params}
	>
		{@render children?.()}
	</div>
{/if}
