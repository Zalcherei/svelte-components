<script>
	import Check from 'lucide-svelte/icons/check';

	export let date = '';
	export let title = '';
	export let last = false;
</script>

<li class="relative flex min-w-32 flex-col items-center">
	<span class="absolute -top-6">{date}</span>
	<span
		class="z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-neutral-700"
	>
		<Check class="h-4 w-4" />
	</span>
	<span>{title}</span>
	{#if last}
		<div
			class="absolute z-10 hidden h-2 w-32 translate-x-1/2 translate-y-[12px] bg-white dark:bg-neutral-700"
		></div>
	{:else}
		<div
			class="absolute z-10 h-2 w-32 translate-x-1/2 translate-y-[12px] bg-white dark:bg-neutral-700"
		></div>
	{/if}
</li>
