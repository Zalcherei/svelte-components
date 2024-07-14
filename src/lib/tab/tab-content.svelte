<script lang="ts">
	import { getContext } from 'svelte';

	const activeTab = getContext('activeTab');

	let className: string = '';
	export { className as class };
	export let id: string | number;

	$: isActive = $activeTab === id;
</script>

{#if isActive}
	<div class="rounded-b-md rounded-tr-md bg-white p-4 dark:bg-neutral-800 {className}">
		<slot></slot>
	</div>
{/if}
