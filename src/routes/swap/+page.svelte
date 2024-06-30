<script>
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';

	let swap = false;

	const handleAction = () => {
		swap = !swap;
	};
</script>

<svelte:head>
	<title>Svelte Components - Swap</title>
</svelte:head>

<div class="flex justify-center">
	<button
		class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		on:click={handleAction}
	>
		{#if swap}
			<X />
		{:else}
			<Menu />
		{/if}
	</button>
</div>
