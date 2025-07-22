<script lang="ts">
	import { cn } from '$lib/utils';
	import type { CardContentProps } from '$lib/card/types';

	const { children, class: className }: CardContentProps = $props();
</script>

<div class={cn('p-4', className)}>
	{@render children?.()}
</div>
