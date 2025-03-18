<script lang="ts">
	import ChevronDown from '$lib/icons/chevron-down.svelte';

	let { children, class: className = '' } = $props();
</script>

<div class="relative">
	<select
		class="block h-10 w-full min-w-32 appearance-none rounded-md border border-gray-200 bg-white px-4 outline-none focus:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 {className}"
	>
		{@render children?.()}
	</select>
	<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
		<ChevronDown class="h-5 w-5" />
	</div>
</div>
