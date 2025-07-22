<script lang="ts">
	import { cn } from '$lib/utils';
	import type { TableProps } from '$lib/table/types';

	let { children, class: className }: TableProps = $props();
</script>

<table class={cn('w-full overflow-hidden rounded-md', className)}>
	{@render children?.()}
</table>
