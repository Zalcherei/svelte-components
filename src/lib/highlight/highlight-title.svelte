<script lang="ts">
	import { cn } from '$lib/utils';
	import type { BaseProps } from '$lib/types';

	const { children, class: className }: BaseProps = $props();
</script>

<!-- eslint-disable -->
<!-- svelte-ignore a11y_figcaption_parent -->
<figcaption
	class={cn(
		'flex h-12 items-center justify-between border-b px-4 py-2 text-lg font-medium',
		className
	)}
>
	{@render children?.()}
</figcaption>
