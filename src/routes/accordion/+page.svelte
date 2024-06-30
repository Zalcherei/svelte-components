<script>
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { slide } from 'svelte/transition';

	let accordion = false;
	const handleClick = () => {
		accordion = !accordion;
	};
</script>

<svelte:head>
	<title>Svelte Components - Accordion</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="mb-1 w-full overflow-hidden rounded-md bg-white dark:bg-neutral-800">
		<button
			class="me-1 inline-flex h-10 w-full items-center justify-between bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
			on:click={handleClick}
		>
			Accordion Item #1
			<ChevronDown />
		</button>
		{#if accordion}
			<div
				class="p-4 {accordion ? 'border-t border-gray-200 dark:border-neutral-700' : ''}"
				transition:slide
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
			</div>
		{/if}
	</div>
	<div class="mb-1 w-full overflow-hidden rounded-md bg-white dark:bg-neutral-800">
		<button
			class="me-1 inline-flex h-10 w-full items-center justify-between bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
			on:click={handleClick}
		>
			Accordion Item #1
			<ChevronDown />
		</button>
		{#if accordion}
			<div
				class="p-4 {accordion ? 'border-t border-gray-200 dark:border-neutral-700' : ''}"
				transition:slide
			>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
			</div>
		{/if}
	</div>
</div>
