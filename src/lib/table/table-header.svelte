<script lang="ts">
	import { cn } from '$lib/utils';
	import type { TableHeaderProps } from '$lib/table/types';

	let { children, class: className }: TableHeaderProps = $props();
</script>

<thead class={cn('h-10 bg-gray-200 dark:bg-neutral-800', className)}>
	{@render children?.()}
</thead>
