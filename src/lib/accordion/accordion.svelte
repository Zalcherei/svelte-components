<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronDown from '$lib/icons/chevron-down.svelte';
	import { slide } from 'svelte/transition';

	let className: string = '';
	export let variant: string = '';
	export let title: string = '';
	export { className as class };
	let accordion: boolean = false;
	const handleClick = () => {
		accordion = !accordion;
	};
</script>

<div
	class="mb-1 w-full overflow-hidden rounded-md bg-white dark:bg-neutral-800 {className} {variant ===
	'outlined'
		? 'border border-gray-200 shadow-none dark:border-neutral-700'
		: variant === 'text'
			? 'shadow-none'
			: variant === 'shadow'
				? 'shadow'
				: ''}"
>
	<Button class="w-full justify-between rounded-none" on:click={handleClick}>
		{title}
		<ChevronDown />
	</Button>
	{#if accordion}
		<div
			class="p-4 {accordion ? 'border-t border-gray-200 dark:border-neutral-700' : ''}"
			transition:slide
		>
			<slot></slot>
		</div>
	{/if}
</div>
