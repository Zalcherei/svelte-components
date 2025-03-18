<script lang="ts">
	import SquareIcon from '$lib/icons/square.svelte';
	import SquareCheckIcon from '$lib/icons/square-check.svelte';

	let { children, class: className = '', id = '' } = $props();
	let checked = $state(false);

	function handleAction() {
		checked = !checked;
	}
</script>

<label class="item-center flex cursor-pointer {className}">
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
