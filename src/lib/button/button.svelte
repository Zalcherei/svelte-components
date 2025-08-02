<script lang="ts">
	import type { ButtonProps } from '$lib/types';
	import { cn } from '$lib/utils';
	import { tv } from 'tailwind-variants';

	const buttonVariants = tv({
		base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
				ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50'
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				icon: 'size-9'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	const {
		children,
		href,
		type = 'button',
		variant = 'default',
		size = 'default',
		disabled,
		class: className,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a role="button" {href} class={cn(buttonVariants({ variant, size }), className)} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<button {type} class={cn(buttonVariants({ variant, size }), className)} {disabled} {...restProps}>
		{@render children?.()}
	</button>
{/if}
