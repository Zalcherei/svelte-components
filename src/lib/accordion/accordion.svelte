<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronDownIcon from '$lib/icons/chevron-down.svelte';
	import { slide } from 'svelte/transition';

	let className: string = '';
	let accordion: boolean = false;
	export let variant: string = '';
	export let label: string = '';
	export { className as class };

	const handleClick = () => {
		accordion = !accordion;
	};

	$: computedClass = `mb-1 w-full overflow-hidden rounded-md bg-white dark:bg-neutral-800  ${
		variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: variant === 'shadow'
					? 'shadow'
					: ''
	} ${className}`;
</script>

<div class={computedClass}>
	<Button
		class="w-full justify-between rounded-none"
		{label}
		icon={ChevronDownIcon}
		prepend={true}
		on:click={handleClick}
	/>
	{#if accordion}
		<div
			class="p-4 {accordion ? 'border-t border-gray-200 dark:border-neutral-700' : ''}"
			transition:slide
		>
			<slot></slot>
		</div>
	{/if}
</div>
