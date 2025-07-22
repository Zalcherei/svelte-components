<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ButtonProps } from '$lib/button/types';

	let {
		children,
		size,
		href,
		variant,
		type = 'button',
		tag = 'button',
		class: className,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		role="button"
		{href}
		class={cn(
			'relative grid grid-flow-col bg-white shadow transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700',
			size === 'icon' ? 'rounded-full p-2.5' : 'rounded-md px-4 py-2',
			variant === 'outlined'
				? 'border border-gray-200 shadow-none dark:border-neutral-700'
				: variant === 'text'
					? 'shadow-none'
					: '',
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
			'relative grid grid-flow-col bg-white shadow transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700',
			size === 'icon' ? 'rounded-full p-2.5' : 'rounded-md px-4 py-2',
			variant === 'outlined'
				? 'border border-gray-200 shadow-none dark:border-neutral-700'
				: variant === 'text'
					? 'shadow-none'
					: '',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</button>
{:else}
	<svelte:element this={tag} {...restProps}>
		{@render children?.()}
	</svelte:element>
{/if}
