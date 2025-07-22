<script lang="ts">
	import type { StepProps } from '$lib/steps/types';

	let { title, id, complete = false, last = false }: StepProps = $props();
</script>

<li class="relative flex min-w-32 flex-col items-center">
	<span
		class="z-20 flex h-8 w-8 items-center justify-center rounded-full {complete
			? 'bg-gray-300 dark:bg-neutral-800'
			: 'bg-white dark:bg-neutral-700'}">{id}</span
	>
	<span>{title}</span>
	<div
		class="absolute z-10 h-2 w-32 translate-x-1/2 translate-y-[12px] {last
			? 'hidden'
			: ''} {complete ? 'bg-gray-300 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-700'}"
	></div>
</li>
