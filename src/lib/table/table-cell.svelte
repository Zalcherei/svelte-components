<script lang="ts">
	import { cn } from '$lib/utils';
	import type { TableCellProps } from '$lib/table/types';

	const { children, class: className }: TableCellProps = $props();
</script>

<td class={cn('min-w-8 px-4', className)}>
	{@render children?.()}
</td>
