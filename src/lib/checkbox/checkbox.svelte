<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import SquareIcon from '$lib/icons/square.svelte';
	import SquareCheckIcon from '$lib/icons/square-check.svelte';

	let className: string = '';
	export let id: string | null | undefined = '';
	export let checked: boolean = false;
	export { className as class };

	const dispatch = createEventDispatcher();

	function handleAction() {
		checked = !checked;
		dispatch('click');
	}
</script>

<label class="item-center flex cursor-pointer {className}">
	<input type="checkbox" {id} {checked} class="sr-only" on:click={handleAction} />
	{#if checked}
		<SquareCheckIcon />
	{:else}
		<SquareIcon />
	{/if}
	<span class="ms-2">
		<slot></slot>
	</span>
</label>
