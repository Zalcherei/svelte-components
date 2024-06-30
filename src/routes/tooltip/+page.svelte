<svelte:head>
	<title>Svelte Components - Tooltip</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex flex-col gap-1">
		<button
			class="group relative me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Left
			<div
				class="absolute -left-2 flex hidden h-8 min-w-max -translate-x-full items-center justify-center rounded-md bg-white px-4 group-hover:flex dark:bg-neutral-800"
			>
				Left tooltip
			</div>
		</button>
		<button
			class="group relative me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Top
			<div
				class="absolute -top-2 flex hidden h-8 min-w-max -translate-y-full items-center justify-center rounded-md bg-white px-4 group-hover:flex dark:bg-neutral-800"
			>
				Top tooltip
			</div>
		</button>
		<button
			class="group relative me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Bottom
			<div
				class="absolute -bottom-2 flex hidden h-8 min-w-max translate-y-full items-center justify-center rounded-md bg-white px-4 group-hover:flex dark:bg-neutral-800"
			>
				Bottom tooltip
			</div>
		</button>
		<button
			class="group relative me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		>
			Right
			<div
				class="absolute -right-2 flex hidden h-8 min-w-max translate-x-full items-center justify-center rounded-md bg-white px-4 group-hover:flex dark:bg-neutral-800"
			>
				Right tooltip
			</div>
		</button>
	</div>
</div>
