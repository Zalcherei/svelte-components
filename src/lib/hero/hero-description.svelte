<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HeroDescriptionProps } from '$lib/hero/types';

	const { children, class: className }: HeroDescriptionProps = $props();
</script>

<p class={cn('w-3/4 p-4 text-center', className)}>
	{@render children?.()}
</p>
