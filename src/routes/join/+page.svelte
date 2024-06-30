<svelte:head>
	<title>Svelte Components - Join</title>
</svelte:head>

<div class="relative flex h-[calc(100vh-32px)] justify-center gap-2">
	<div class="flex">
		<button
			class="relative inline-flex h-10 min-w-10 items-center justify-center rounded-l-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Button
		</button>
		<button
			class="relative inline-flex h-10 min-w-10 items-center justify-center bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Button
		</button>
		<button
			class="relative inline-flex h-10 min-w-10 items-center justify-center rounded-r-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
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
	<div class="flex flex-col">
		<button
			class="relative inline-flex h-10 min-w-10 items-center justify-center rounded-t-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Button
			<span class="absolute -right-1 -top-1 flex h-3 w-3">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
				></span>
				<span class="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
			</span>
		</button>
		<button
			class="relative inline-flex h-10 min-w-10 items-center justify-center bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Button
		</button>
		<button
			class="relative inline-flex h-10 min-w-10 items-center justify-center rounded-b-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Button
		</button>
	</div>
</div>
