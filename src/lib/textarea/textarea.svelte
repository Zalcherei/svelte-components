<script lang="ts">
	import { cn } from '$lib/utils';
	import type { TextareaProps } from '$lib/textarea/types';

	let { class: className, placeholder, resize }: TextareaProps = $props();
</script>

<textarea
	class={cn(
		'w-full rounded-md border border-gray-200 p-2 outline-none focus:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800',
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
