<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<tr class={cn('h-10', className)}>
	{@render children?.()}
</tr>
