<script>
	import Button from '$lib/button/button.svelte';
	import { fly } from 'svelte/transition';

	let clazz = '';
	export { clazz as class };
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
			class="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none {clazz}"
			transition:fly
		>
			<slot></slot>
		</div>
	{/if}
</div>
