<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<kbd class={cn('me-1 flex h-8 items-center justify-center rounded-md border px-4', className)}>
	{@render children?.()}
</kbd>
