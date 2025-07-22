<script lang="ts">
	import { cn } from '$lib/utils';
	import type { FooterProps } from '$lib/footer/types';

	let { children, class: className, variant }: FooterProps = $props();
</script>

<footer
	class={cn(
		'absolute bottom-0 flex h-10 w-full items-center justify-center bg-white dark:bg-neutral-800',
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
</footer>
