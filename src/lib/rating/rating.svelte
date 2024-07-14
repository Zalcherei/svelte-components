<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Star from '$lib/icons/star.svelte';
	import { writable } from 'svelte/store';

	export let stars: number = 0;
	export let variant: string = '';
	const rating = writable(0);

	const setRating = (value: number) => {
		rating.set(value);
	};
</script>

{#each Array(stars) as _, i}
	<Button
		{variant}
		size="icon"
		class="text-black hover:text-yellow-500 dark:text-white"
		on:click={() => setRating(i + 1)}
	>
		{#if $rating > i}
			<Star class="text-yellow-500" />
		{:else}
			<Star />
		{/if}
	</Button>
{/each}
