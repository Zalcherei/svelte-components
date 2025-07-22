<script lang="ts">
	import { cn } from '$lib/utils';
	import type { CardProps } from '$lib/card/types';

	const { children, variant, class: className }: CardProps = $props();
</script>

<div
	class={cn(
		'flex w-full flex-col rounded-md bg-white dark:bg-neutral-800',
		variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: variant === 'shadow'
					? 'shadow'
					: '',
		className
	)}
>
	{@render children?.()}
</div>
