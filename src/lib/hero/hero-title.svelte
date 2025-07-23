<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HeroTitleProps } from '$lib/hero/types';

	const { children, class: className }: HeroTitleProps = $props();
</script>

<h1 class={cn('text-5xl font-bold', className)}>
	{@render children?.()}
</h1>
