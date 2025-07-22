<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import { cn } from '$lib/utils';
	import { getContext } from 'svelte';
	import type { DropdownMenuContext, DropdownMenuTriggerProps } from '$lib/dropdown-menu/types';

	const { children, class: className }: DropdownMenuTriggerProps = $props();

	const { toggle } = getContext<DropdownMenuContext>('dropdown-menu');
</script>

<Button class={cn(className)} onclick={toggle}>
	{@render children?.()}
</Button>
