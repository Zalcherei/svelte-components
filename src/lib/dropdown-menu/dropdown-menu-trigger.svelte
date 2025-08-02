<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import type { Context, DropdownMenuTriggerProps } from '$lib/types';
	import { getContext } from 'svelte';

	const { children }: DropdownMenuTriggerProps = $props();

	const { toggle } = getContext<Context>('dropdown-menu');
</script>

<Button onclick={toggle}>
	{@render children?.()}
</Button>
