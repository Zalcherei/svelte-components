<script lang="ts">
	import { cn } from '$lib/utils';
	import type { JoinProps } from '$lib/join/types';

	let { children, class: className, direction }: JoinProps = $props();
</script>

{#if direction === 'horizontal'}
	<div
		class={cn(
			'flex [&>*]:me-0 [&>*]:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md',
			className
		)}
	>
		{@render children?.()}
	</div>
{:else if direction === 'vertical'}
	<div
		class={cn(
			'flex flex-col [&>*]:me-0 [&>*]:rounded-none [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md',
			className
		)}
	>
		{@render children?.()}
	</div>
{/if}
