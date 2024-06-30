<svelte:head>
	<title>Svelte Components - Indicator</title>
</svelte:head>

<div class="relative flex h-[calc(100vh-32px)] justify-center">
	<button
		class="relative me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
	>
		Button
		<span class="absolute -right-1 -top-1 flex h-3 w-3">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
			></span>
			<span class="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
		</span>
	</button>
</div>
