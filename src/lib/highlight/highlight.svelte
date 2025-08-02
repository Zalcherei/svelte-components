<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<figure class={cn('overflow-hidden rounded-md border bg-sidebar', className)}>
	{@render children?.()}
</figure>
