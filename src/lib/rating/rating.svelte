<script>
	import Star from 'lucide-svelte/icons/star';
	import { writable } from 'svelte/store';

	export let stars = 0;

	const rating = writable(0);

	const setRating = (value) => {
		rating.set(value);
	};
</script>

{#each Array(stars) as _, i}
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
