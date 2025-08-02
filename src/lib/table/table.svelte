<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, class: className }: BaseProps = $props();
</script>

<table class={cn('w-full overflow-hidden rounded-md', className)}>
	{@render children?.()}
</table>
