<script>
	import { createEventDispatcher } from 'svelte';

	let clazz = '';
	export let target = '';
	export let href = '';
	export let variant = '';
	export let size = '';
	export { clazz as class };

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
	};
</script>

{#if href}
	<a
		class="relative inline-flex h-10 min-w-10 items-center justify-center bg-white shadow transition hover:bg-gray-100 {size ===
		'icon'
			? 'rounded-full px-0'
			: 'rounded-md px-4'} {clazz} {variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: ''}"
		{target}
		{href}
	>
		<slot></slot>
	</a>
{:else}
	<button
		class="relative inline-flex h-10 min-w-10 items-center justify-center bg-white shadow transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 {size ===
		'icon'
			? 'rounded-full px-0'
			: 'rounded-md px-4'} {clazz} {variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: ''}"
		on:click={handleClick}
	>
		<slot></slot>
	</button>
{/if}
