<script lang="ts">
	import { cn } from '$lib/utils';
	import type { TableHeadProps } from '$lib/table/types';

	const { children, class: className }: TableHeadProps = $props();
</script>

<th class={cn('min-w-8 px-4', className)}>
	{@render children?.()}
</th>
