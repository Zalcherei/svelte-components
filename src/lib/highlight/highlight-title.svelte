<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HighlightTitleProps } from '$lib/highlight/types';

	const { children, class: className }: HighlightTitleProps = $props();
</script>

<!-- eslint-disable -->
<!-- svelte-ignore a11y_figcaption_parent -->
<figcaption
	class={cn(
		'flex h-12 items-center justify-between border-b px-4 py-2 text-lg font-bold dark:border-neutral-700 dark:bg-neutral-800 dark:text-white',
		className
	)}
>
	{@render children?.()}
</figcaption>
