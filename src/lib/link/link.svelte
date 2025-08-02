<script lang="ts">
	import type { LinkProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { children, href, target, class: className }: LinkProps = $props();
</script>

<a class={cn('hover:underline', className)} {href} {target}>
	{@render children?.()}
</a>
