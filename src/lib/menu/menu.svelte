<script lang="ts">
	import { cn } from '$lib/utils';
	import type { MenuProps } from '$lib/menu/types';

	let { children, class: className, variant }: MenuProps = $props();
</script>

<ul
	class={cn(
		'flex w-auto overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none',
		variant === 'row' ? 'flex-row' : variant === 'col' ? 'flex-col' : '',
		className
	)}
>
	{@render children?.()}
</ul>
