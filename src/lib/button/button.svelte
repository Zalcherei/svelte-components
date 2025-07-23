<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ButtonProps } from '$lib/button/types';

	let {
		children,
		href,
		type = 'button',
		tag = 'button',
		disabled,
		class: className,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		role="button"
		{href}
		class={cn(
			'relative inline-flex items-center justify-center rounded-md bg-white px-4 py-2 transition-colors hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else if tag === 'button'}
	<button
		{type}
		class={cn(
			'relative inline-flex items-center justify-center rounded-md bg-white px-4 py-2 transition-colors hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700',
			className
		)}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{:else}
	<svelte:element this={tag} {...restProps}>
		{@render children?.()}
	</svelte:element>
{/if}
