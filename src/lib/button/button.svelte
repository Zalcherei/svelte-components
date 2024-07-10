<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let clazz = '';
	export let target = '';
	export let href = '';
	export let variant = '';
	export let size = '';
	export let label = '';
	export let icon = '';
	export let prepend = false;
	export let append = false;
	export { clazz as class };

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
	};
</script>

{#if href}
	<a
		class="relative grid grid-flow-col bg-white shadow transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 {size ===
		'icon'
			? 'rounded-full p-3'
			: 'rounded-md px-4 py-2'}
{clazz}
{variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: ''}"
		{target}
		{href}
	>
		{#if prepend === true && icon}
			<svelte:component this={icon} class="h-5 w-5" />
			{label}
		{:else if append === true && icon}
			<svelte:component this={icon} class="h-5 w-5" />
			{label}
		{:else if icon}
			<svelte:component this={icon} class="h-5 w-5" />
			{label}
		{:else}
			{label}
			<slot></slot>
		{/if}
	</a>
{:else}
	<button
		class="relative grid grid-flow-col bg-white shadow transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 {size ===
		'icon'
			? 'rounded-full p-3'
			: 'rounded-md px-4 py-2'}
    {clazz}
    {variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: ''}"
		on:click={handleClick}
	>
		{#if prepend === true && icon}
			<svelte:component this={icon} class="h-5 w-5" />
			{label}
		{:else if append === true && icon}
			<svelte:component this={icon} class="h-5 w-5" />
			{label}
		{:else if icon}
			<svelte:component this={icon} class="h-5 w-5" />
			{label}
		{:else}
			{label}
			<slot></slot>
		{/if}
	</button>
{/if}
