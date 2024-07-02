<script>
	import Button from '$lib/button/button.svelte';
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
	<Button size="icon" on:click={handleAction}>
		{#if swap}
			<X />
		{:else}
			<Menu />
		{/if}
	</Button>
</div>
