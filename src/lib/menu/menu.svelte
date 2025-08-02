<script lang="ts">
	import type { MenuProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { children, class: className, variant }: MenuProps = $props();
</script>

<ul
	class={cn(
		'flex w-auto gap-1 overflow-hidden rounded-md bg-sidebar text-primary-foreground',
		variant === 'row' ? 'flex-row' : variant === 'col' ? 'flex-col' : '',
		className
	)}
>
	{@render children?.()}
</ul>
