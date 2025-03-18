<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronLeftIcon from '$lib/icons/chevron-left.svelte';
	import ChevronRightIcon from '$lib/icons/chevron-right.svelte';

	let { children, class: className = '', variant = '', controls = false } = $props();
</script>

<nav
	class="flex h-auto min-w-min items-center overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>button]:me-0 [&>button]:rounded-none {className}"
>
	{#if controls}
		<Button {variant} icon={ChevronLeftIcon} />
	{/if}
	{@render children?.()}

	{#if controls}
		<Button {variant} icon={ChevronRightIcon} />
	{/if}
</nav>
