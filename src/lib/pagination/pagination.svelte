<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import ChevronLeftIcon from '$lib/icons/chevron-left.svelte';
	import ChevronRightIcon from '$lib/icons/chevron-right.svelte';
	import type { PaginationProps } from '$lib/pagination/types';
	import { cn } from '$lib/utils';

	let { children, class: className, variant, controls = false }: PaginationProps = $props();
</script>

<nav
	class={cn(
		'flex h-auto min-w-min items-center overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>button]:me-0 [&>button]:rounded-none',
		className
	)}
>
	{#if controls}
		<Button {variant}>
			<ChevronLeftIcon />
		</Button>
	{/if}
	{@render children?.()}

	{#if controls}
		<Button {variant}>
			<ChevronRightIcon />
		</Button>
	{/if}
</nav>
