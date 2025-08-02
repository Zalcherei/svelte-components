<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronDownIcon from '$lib/icons/chevron-down.svelte';
	import type { Context } from '$lib/types';
	import { getContext } from 'svelte';

	const { children } = $props();

	const { open, toggle } = getContext<Context>('accordion');
</script>

<Button variant="ghost" class="w-full justify-between" onclick={toggle}>
	{@render children?.()}
	<ChevronDownIcon class={$open ? 'rotate-180 transition-transform' : 'transition-transform'} />
</Button>
