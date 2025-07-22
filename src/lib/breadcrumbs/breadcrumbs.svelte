<script lang="ts">
	import type { BreadcrumbsProps } from '$lib/breadcrumbs/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: BreadcrumbsProps = $props();
</script>

<div>
	<ul
		class={cn(
			"flex [&>*]:me-2 [&>*]:after:content-['>'] [&>*:last-child]:after:content-['']",
			className
		)}
	>
		{@render children?.()}
	</ul>
</div>
