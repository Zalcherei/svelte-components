<script lang="ts">
	import SquareIcon from '$lib/icons/square.svelte';
	import SquareCheckIcon from '$lib/icons/square-check.svelte';
	import { cn } from '$lib/utils';
	import type { CheckboxProps } from '$lib/types';

	let { checked = $bindable(false), class: className, id, ...restProps }: CheckboxProps = $props();

	$effect(() => {
		checked = checked;
	});
</script>

<label class="cursor-pointer" {...restProps}>
	<input type="checkbox" {id} class={cn('sr-only', className)} bind:checked {...restProps} />
	{#if checked}
		<SquareCheckIcon />
	{:else}
		<SquareIcon />
	{/if}
</label>
