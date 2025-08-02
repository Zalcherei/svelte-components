<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<thead class={cn('h-10 bg-gray-200 dark:bg-neutral-800', className)}>
	{@render children?.()}
</thead>
