<svelte:head>
	<title>Svelte Components - Chat Bubble</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex w-2/4 flex-col">
		<div class="mb-4 flex w-full justify-start">
			<div class="relative w-full max-w-64 rounded-md bg-gray-200 p-4 dark:bg-neutral-800">
				<img
					class="absolute -left-14 top-0 h-12 w-12 rounded-md"
					alt="..."
					src="https://picsum.photos/48/48"
				/>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.
			</div>
		</div>
		<div class="flex w-full justify-end">
			<div
				class="relative w-full max-w-64 justify-self-end rounded-md bg-gray-200 p-4 dark:bg-neutral-800"
			>
				<img
					class="absolute -right-14 top-0 h-12 w-12 rounded-md"
					alt="..."
					src="https://picsum.photos/48/48"
				/>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, accusantium.
			</div>
		</div>
	</div>
</div>
