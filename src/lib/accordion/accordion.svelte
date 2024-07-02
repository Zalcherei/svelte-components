<script>
	import Button from '$lib/button/button.svelte';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
	import { slide } from 'svelte/transition';

	export let title = '';
	let accordion = false;
	const handleClick = () => {
		accordion = !accordion;
	};
</script>

<div class="mb-1 w-full overflow-hidden rounded-md bg-white dark:bg-neutral-800">
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
