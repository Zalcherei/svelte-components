<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HighlightDisplayProps } from '$lib/highlight/types';

	const { children, class: className }: HighlightDisplayProps = $props();
</script>

<div class={cn('flex min-h-64 flex-col items-center justify-center', className)}>
	{@render children?.()}
</div>
