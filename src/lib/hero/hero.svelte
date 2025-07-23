<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HeroProps } from '$lib/hero/types';

	let { children, class: className }: HeroProps = $props();
</script>

<div
	class={cn(
		'flex h-96 w-full flex-col items-center justify-center bg-white dark:bg-neutral-800',
		className
	)}
>
	{@render children?.()}
</div>
