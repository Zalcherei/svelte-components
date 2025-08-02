<script lang="ts">
	import type { InputProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { class: className, type = 'text', placeholder }: InputProps = $props();
</script>

<input
	class={cn(
		'h-10 rounded-md border bg-sidebar px-4 text-sidebar-foreground outline-none',
		className
	)}
	{type}
	{placeholder}
/>
