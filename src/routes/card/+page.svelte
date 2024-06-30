<svelte:head>
	<title>Svelte Components - Card</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex w-full flex-col rounded-md bg-white dark:bg-neutral-800">
		<div class="flex h-16 w-full items-center justify-between border-b border-gray-200 px-4">
			<div>Card</div>
		</div>
		<div class="p-4">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam, dignissimos
			reprehenderit eligendi natus at. Minus, eaque possimus!
		</div>
		<div class="flex h-16 w-full items-center border-t border-gray-200 px-4">
			<button
				class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
			>
				Accept
			</button>
			<button
				class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
			>
				Decline
			</button>
		</div>
	</div>
</div>
