<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type Icon from '$lib/icons/icon.svelte.d.ts';
	import { createEventDispatcher } from 'svelte';

	let className: string = '';
	export let target: string = '';
	export let href: string = '';
	export let variant: string = '';
	export let size: number | string = '';
	export let label: string = '';
	export let icon: ComponentType<Icon> | null = null;
	export let prepend: boolean = false;
	export let append: boolean = false;
	export { className as class };

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
{className}
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
    {className}
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
