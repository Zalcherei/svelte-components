<script>
	import { getContext } from 'svelte';

	const activeTab = getContext('activeTab');
	export let id;

	$: isActive = $activeTab === id;
</script>

{#if isActive}
	<div class="rounded-b-md rounded-tr-md bg-white p-4 dark:bg-neutral-800">
		<slot></slot>
	</div>
{/if}
