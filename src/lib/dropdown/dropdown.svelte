<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import { fly } from 'svelte/transition';

	let { children, class: className = '', label = '', variant = '' } = $props();
	let dropdown = $state(false);
	function handleClick() {
		dropdown = !dropdown;
	}
</script>

<div class="relative">
	<Button {variant} {label} onclick={handleClick} />
	{#if dropdown}
		<div
			class="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none {className}"
			transition:fly
		>
			{@render children?.()}
		</div>
	{/if}
</div>
