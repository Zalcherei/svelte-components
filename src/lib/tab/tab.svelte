<script lang="ts">
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Button from '../button/button.svelte';

	const activeTab = getContext('activeTab');

	let className: string = '';
	export { className as class };
	export let id: string | number;
	export let label: string = '';

	$: isActive = $activeTab === id;

	function handleClick() {
		activeTab.set(id);
	}
</script>

<Button
	class="me-0 rounded-none {isActive ? 'bg-gray-200 dark:bg-neutral-700' : ''} {className}"
	{label}
	variant="text"
	onclick={handleClick}
/>
