<script>
	import Square from 'lucide-svelte/icons/square';
	import SquareCheck from 'lucide-svelte/icons/square-check';

	let checked = false;

	const handleClick = () => {
		checked = !checked;
	};
</script>

<svelte:head>
	<title>Svelte Components - Checkbox</title>
</svelte:head>

<div class="flex justify-center">
	<button class="inline-flex h-10 min-w-10 items-center gap-1 transition" on:click={handleClick}>
		{#if checked}
			<SquareCheck />
		{:else}
			<Square />
		{/if}
		<span>Checkbox</span>
	</button>
</div>
