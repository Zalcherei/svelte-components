<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HeroProps } from '$lib/hero/types';

	let { children, class: className, title, description }: HeroProps = $props();
</script>

<div
	class={cn(
		'flex h-96 w-full flex-col items-center justify-center bg-white dark:bg-neutral-800',
		className
	)}
>
	<h1 class="text-5xl font-bold">{title}</h1>
	<p class="w-3/4 p-4 text-center">
		{description}
	</p>
	{@render children?.()}
</div>
