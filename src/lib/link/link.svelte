<script lang="ts">
	import type { LinkProps } from '$lib/link/types';

	let { children, class: className, href, target }: LinkProps = $props();
</script>

<a class="hover:text-gray-700 hover:underline {className}" {href} {target}>
	{@render children?.()}
</a>
