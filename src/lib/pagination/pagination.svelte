<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';

	let className: string = '';
	export { className as class };
	export let variant: string = '';
	export let controls: boolean = false;
</script>

<nav
	class="flex h-auto min-w-min items-center overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>button]:me-0 [&>button]:rounded-none {className}"
>
	{#if controls}
		<Button {variant}>
			<ChevronLeft />
		</Button>
	{/if}
	<slot></slot>

	{#if controls}
		<Button {variant}>
			<ChevronRight />
		</Button>
	{/if}
</nav>
