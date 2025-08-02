<script lang="ts">
	import type { BreadCrumbItemProps } from '$lib/types';

	const { children, href }: BreadCrumbItemProps = $props();
</script>

<li>
	{#if href}
		<a class="mr-2 hover:underline" {href}>
			{@render children?.()}
		</a>
	{:else}
		{@render children?.()}
	{/if}
</li>
