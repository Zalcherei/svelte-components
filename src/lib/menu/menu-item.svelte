<script lang="ts">
	import { cn } from '$lib/utils';
	import type { MenuItemProps } from '$lib/menu/types';

	let { children, class: className, href }: MenuItemProps = $props();
</script>

<li>
	<a
		class={cn(
			'flex h-10 w-full items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700',
			className
		)}
		{href}
	>
		{@render children?.()}
	</a>
</li>
