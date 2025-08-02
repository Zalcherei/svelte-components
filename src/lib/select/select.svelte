<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	let { children, value = $bindable() } = $props();

	const isOpen = writable(false);
	const selected = writable('');
	const focusedIndex = writable(0);

	setContext('select', { isOpen, selected, focusedIndex });
</script>

<div class="custom-select relative" data-select>
	{@render children?.()}
</div>
