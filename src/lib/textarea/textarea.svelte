<script lang="ts">
	import type { TextareaProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { class: className, placeholder, resize }: TextareaProps = $props();
</script>

<textarea
	class={cn(
		'w-full rounded-md border bg-sidebar p-2 text-sidebar-foreground outline-none',
		resize === 'resize'
			? 'resize'
			: resize === 'x'
				? 'resize-x'
				: resize === 'y'
					? 'resize-y'
					: resize === 'resize-none'
						? 'resize-none'
						: '',
		className
	)}
	{placeholder}
>
</textarea>
