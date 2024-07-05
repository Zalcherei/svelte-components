<script>
	import Button from '$lib/button/button.svelte';
	import { fly } from 'svelte/transition';

	export let variant = '';
	export let title = '';
	let dropdown = false;
	const handleClick = () => {
		dropdown = !dropdown;
	};
</script>

<div class="relative">
	<Button {variant} on:click={handleClick}>
		{title}
	</Button>
	{#if dropdown}
		<div
			class="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800"
			transition:fly
		>
			<slot></slot>
		</div>
	{/if}
</div>
