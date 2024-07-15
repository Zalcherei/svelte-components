<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import { fly } from 'svelte/transition';

	let className: string = '';
	export let label: string = '';
	export { className as class };
	export let variant: string = '';
	let dropdown: boolean = false;
	const handleClick = () => {
		dropdown = !dropdown;
	};
</script>

<div class="relative">
	<Button {variant} {label} on:click={handleClick} />
	{#if dropdown}
		<div
			class="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none {className}"
			transition:fly
		>
			<slot></slot>
		</div>
	{/if}
</div>
