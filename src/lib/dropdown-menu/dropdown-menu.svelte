<script lang="ts">
	import { cn } from '$lib/utils';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { DropdownMenuContext, DropdownMenuProps } from '$lib/dropdown-menu/types';

	let { children, open: isOpen = false, class: className }: DropdownMenuProps = $props();

	const open = writable(isOpen);
	setContext<DropdownMenuContext>('dropdown-menu', { open, toggle: () => open.update((n) => !n) });
</script>

<div class={cn('relative', className)}>
	{@render children?.()}
</div>
