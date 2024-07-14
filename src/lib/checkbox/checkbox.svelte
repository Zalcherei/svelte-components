<script lang="ts">
	import Square from '$lib/icons/square.svelte';
	import SquareCheck from '$lib/icons/square-check.svelte';

	let className: string = '';
	let checked: boolean = false;
	export { className as class };

	const handleClick = () => {
		checked = !checked;
	};
</script>

<button
	class="inline-flex h-10 min-w-10 items-center gap-1 transition {className}"
	on:click={handleClick}
>
	{#if checked}
		<SquareCheck />
	{:else}
		<Square />
	{/if}
	<span><slot></slot></span>
</button>
