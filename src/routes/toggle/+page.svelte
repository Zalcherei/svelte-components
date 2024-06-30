<svelte:head>
	<title>Svelte Components - Toggle</title>
</svelte:head>

<div class="flex justify-center">
	<label class="relative inline-flex cursor-pointer items-center">
		<input id="switch" type="checkbox" class="peer sr-only" />
		<label for="switch" class="hidden"></label>
		<div
			class="peer h-6 w-11 rounded-full border bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300 dark:border-neutral-700 dark:bg-neutral-800 after:dark:border-neutral-700 after:dark:bg-neutral-500 peer-checked:dark:border-neutral-700 peer-checked:dark:bg-neutral-800"
		></div>
		<span class="ml-2">Toggle me</span>
	</label>
</div>
