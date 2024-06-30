<script>
	import X from 'lucide-svelte/icons/x';
	import { fly } from 'svelte/transition';

	let modal = false;
	const handleClick = () => {
		modal = !modal;
	};
</script>

<svelte:head>
	<title>Svelte Components - Modal</title>
</svelte:head>

<div class="flex justify-center">
	<button
		class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		on:click={handleClick}
	>
		Modal
	</button>

	{#if modal}
		<div
			class="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-100 opacity-50 dark:bg-neutral-500"
			transition:fly
		>
			<div class="flex w-96 flex-col rounded-md bg-white shadow dark:bg-neutral-800">
				<div class="flex h-16 w-full items-center justify-between border-b border-gray-200 px-4">
					<div>Modal</div>
					<button
						class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
						on:click={handleClick}
					>
						<X />
					</button>
				</div>
				<div class="p-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
					dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
				</div>
				<div class="flex h-16 w-full items-center border-t border-gray-200 px-4">
					<button
						class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
						on:click={handleClick}
					>
						Accept
					</button>
					<button
						class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
						on:click={handleClick}
					>
						Decline
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>
