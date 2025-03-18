<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import { slide } from 'svelte/transition';

	let { children, class: className = '', variant = '', title = '' } = $props();
	let accordion = $state(false);
	function handleClick() {
		accordion = !accordion;
	}
</script>

<div
	class="mb-1 flex w-full flex-col overflow-hidden rounded-md bg-white dark:bg-neutral-800 {variant ===
	'outlined'
		? 'border border-gray-200 shadow-none dark:border-neutral-700'
		: variant === 'text'
			? 'shadow-none'
			: variant === 'shadow'
				? 'shadow'
				: ''} {className}"
>
	<Button class="w-full !justify-start !rounded-none" onclick={handleClick}>
		{title}
	</Button>
	{#if accordion}
		<div
			class="p-4 {accordion ? 'border-t border-gray-200 dark:border-neutral-700' : ''}"
			transition:slide
		>
			{@render children?.()}
		</div>
	{/if}
</div>
