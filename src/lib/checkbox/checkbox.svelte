<script lang="ts">
	import SquareIcon from '$lib/icons/square.svelte';
	import SquareCheckIcon from '$lib/icons/square-check.svelte';
	import { cn } from '$lib/utils';
	import type { CheckboxProps } from '$lib/checkbox/types';

	let { children, class: className, id }: CheckboxProps = $props();
	let checked = $state(false);

	function handleAction() {
		checked = !checked;
	}
</script>

<label class={cn('item-center flex cursor-pointer', className)}>
	<input type="checkbox" {id} {checked} class="sr-only" onclick={handleAction} />
	{#if checked}
		<SquareCheckIcon />
	{:else}
		<SquareIcon />
	{/if}
	<span class="ms-2">
		{@render children?.()}
	</span>
</label>
