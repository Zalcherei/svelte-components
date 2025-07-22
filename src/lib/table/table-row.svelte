<script lang="ts">
	import { cn } from '$lib/utils';
	import type { TableRowProps } from '$lib/table/types';

	let { children, class: className }: TableRowProps = $props();
</script>

<tr class={cn('h-10', className)}>
	{@render children?.()}
</tr>
