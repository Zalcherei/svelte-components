<script>
	import Button from '$lib/button/button.svelte';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	export let variant = '';
	export let controls = false;
</script>

<nav
	class="flex h-auto min-w-min items-center overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>button]:me-0 [&>button]:rounded-none"
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
