<script lang="ts">
	import type { BaseProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { children, class: className }: BaseProps = $props();
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
