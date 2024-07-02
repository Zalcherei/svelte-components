<script>
	import Drawer from '$lib/drawer/drawer.svelte';

	let drawer = true;

	const handleAction = () => {
		drawer = !drawer;
	};
</script>

<svelte:head>
	<title>Svelte Components - Drawer</title>
</svelte:head>

<div class="flex justify-center gap-2">
	{#if drawer}
		<Drawer>
			<ul>
				<li>
					<a
						class="flex h-10 w-full items-center justify-between rounded-md px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
						href="/">Item 1</a
					>
				</li>
				<li>
					<a
						class="flex h-10 w-full items-center justify-between rounded-md px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"
						href="/">Item 2</a
					>
				</li>
			</ul>
		</Drawer>
	{/if}
	<button
		class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		on:click={handleAction}
	>
		Open/Close
	</button>
</div>
