<script lang="ts">
	import { getContext, onDestroy, type Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import ChevronDownIcon from '$lib/icons/chevron-down.svelte';
	import Button from '$lib/button/button.svelte';
	import { clickOutside, cn } from '$lib/utils';

	let {
		children,
		class: className
	}: {
		children?: Snippet;
		class?: string;
	} = $props();

	let buttonElement: HTMLButtonElement;

	const { isOpen, selected } = getContext('select');

	const toggle = () => {
		isOpen.update((v) => !v);
	};

	// Default fallback text
	let selectedText = $derived($selected || 'Select');

	function handleOutclick() {
		isOpen.set(false);
	}
</script>

<button
	bind:this={buttonElement}
	type="button"
	role="combobox"
	aria-controls="select-dropdown"
	class={cn(
		'relative inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 transition-colors hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700',
		className
	)}
	aria-haspopup="listbox"
	aria-expanded={$isOpen}
	use:clickOutside={{ enabled: $isOpen }}
	onoutclick={handleOutclick}
	onclick={toggle}
>
	<span>{selectedText}</span>
	<ChevronDownIcon />
</button>
