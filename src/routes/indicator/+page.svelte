<script>
	import Indicator from '$lib/indicator/indicator.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Indicator</title>
</svelte:head>

<div class="relative flex h-[calc(100vh-32px)] justify-center">
	<button
		class="relative me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
	>
		Button
		<Indicator />
	</button>
</div>
