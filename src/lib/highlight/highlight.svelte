<script lang="ts">
	import type { HighlightProps } from '$lib/highlight/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: HighlightProps = $props();
</script>

<figure
	class={cn('overflow-hidden rounded-md border border-gray-200 dark:border-neutral-700', className)}
>
	{@render children?.()}
</figure>
