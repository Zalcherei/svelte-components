<script lang="ts">
	import { cn } from '$lib/utils';
	import type { DividerProps } from '$lib/divider/types';

	let { class: className }: DividerProps = $props();
</script>

<div class={cn('h-px w-full bg-gray-200 dark:bg-neutral-700', className)}></div>
