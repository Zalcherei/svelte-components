<script lang="ts">
	import type { Context, DropdownMenuProps } from '$lib/types';
	import { cn } from '$lib/utils';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const { children, open: isOpen = false, class: className }: DropdownMenuProps = $props();

	const open = writable(isOpen);
	setContext<Context>('dropdown-menu', { open, toggle: () => open.update((n) => !n) });
</script>

<div class={cn('relative', className)}>
	{@render children?.()}
</div>
