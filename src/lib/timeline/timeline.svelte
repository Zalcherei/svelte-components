<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: BaseProps = $props();
</script>

<ul class={cn('mt-5 flex', className)}>
	{@render children?.()}
</ul>
