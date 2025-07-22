<script lang="ts">
	import type { TimelineProps } from '$lib/timeline/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: TimelineProps = $props();
</script>

<ul class={cn('mt-5 flex', className)}>
	{@render children?.()}
</ul>
