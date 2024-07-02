<script>
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import Button from '../button/button.svelte';

	const activeTab = getContext('activeTab');
	export let id;
	export let title = '';

	$: isActive = $activeTab === id;

	function handleClick() {
		activeTab.set(id);
	}
</script>

<Button
	on:click={handleClick}
	class="me-0 rounded-none {isActive ? 'bg-gray-200 dark:bg-neutral-700' : ''}"
>
	{title}
</Button>
