<script>
	import { fly } from 'svelte/transition';

	let dropdown = false;
	const handleClick = () => {
		dropdown = !dropdown;
	};
</script>

<svelte:head>
	<title>Svelte Components - Dropdown</title>
</svelte:head>

<div class="flex justify-center">
	<div class="relative">
		<button
			class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800"
			on:click={handleClick}
		>
			Dropdown
		</button>
		{#if dropdown}
			<div
				class="absolute flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800"
				transition:fly
			>
				<a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/"
					>Item 1</a
				>
				<a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/"
					>Item 2</a
				>
				<a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/"
					>Item 3</a
				>
				<a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/"
					>Item 4</a
				>
			</div>
		{/if}
	</div>
</div>
