<script>
	import Home from 'lucide-svelte/icons/house';
</script>

<svelte:head>
	<title>Svelte Components - Button</title>
</svelte:head>

<div class="flex justify-center">
	<button
		class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
	>
		Button
	</button>
	<button
		class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
	>
		<Home />
	</button>
</div>
