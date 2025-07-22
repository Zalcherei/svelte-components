<script lang="ts">
	import type { AvatarProps } from '$lib/avatar/types';
	import { cn } from '$lib/utils';

	let { size, src, alt, class: className }: AvatarProps = $props();
</script>

<img
	class={cn(
		'rounded-md',
		size === 'lg' ? 'h-16 w-16' : size === 'md' ? 'h-12 w-12' : size === 'sm' ? 'h-8 w-8' : '',
		className
	)}
	{alt}
	{src}
/>
