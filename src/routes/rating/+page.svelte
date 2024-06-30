<script>
	import Star from 'lucide-svelte/icons/star';
	import { writable } from 'svelte/store';

	const rating = writable(0);

	const setRating = (value) => {
		rating.set(value);
	};
</script>

<svelte:head>
	<title>Svelte Components - Rating</title>
</svelte:head>

<div class=" flex h-[calc(100vh-32px)] justify-center">
	{#each Array(5) as _, i}
		<button
			class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-full transition"
			on:click={() => setRating(i + 1)}
		>
			{#if $rating > i}
				<Star class="text-yellow-500" />
			{:else}
				<Star class="text-white hover:text-yellow-500" />
			{/if}
		</button>
	{/each}
</div>
