<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<td class={cn('min-w-8 px-4', className)}>
	{@render children?.()}
</td>
