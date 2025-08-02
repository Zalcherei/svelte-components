<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<div class={cn('flex h-16 items-center justify-center font-medium', className)}>
	{@render children?.()}
</div>
