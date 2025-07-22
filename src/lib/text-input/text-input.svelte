<script lang="ts">
	import { cn } from '$lib/utils';
	import type { TextInputProps } from '$lib/text-input/types';

	let { class: className, placeholder }: TextInputProps = $props();
</script>

<input
	class={cn(
		'h-10 rounded-md border border-gray-200 bg-white px-4 outline-none focus:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800',
		className
	)}
	type="text"
	{placeholder}
/>
