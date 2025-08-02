<script lang="ts">
	import { cn } from '$lib/utils';
	import type { BaseProps } from '$lib/types';

	const { children, class: className }: BaseProps = $props();
</script>

<div class={cn('flex min-h-64 flex-col items-center justify-center p-4', className)}>
	{@render children?.()}
</div>
