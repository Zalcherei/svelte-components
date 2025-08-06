<script lang="ts">
	import { getContext, onMount } from 'svelte';

	let { children } = $props();

	const { isOpen, focusedIndex } = getContext('select');
	let dropdown: HTMLUListElement;

	let options: HTMLElement[] = [];

	onMount(() => {
		options = Array.from(dropdown.querySelectorAll('[role="option"]'));
	});
</script>

<ul
	bind:this={dropdown}
	role="listbox"
	class="select-dropdown border-px absolute top-full left-0 w-full min-w-max rounded-md bg-sidebar p-2.5 shadow"
	class:hidden={!$isOpen}
	tabindex="0"
>
	{@render children?.()}
</ul>
