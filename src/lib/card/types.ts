import type { Snippet } from 'svelte';

type variant = 'outlined' | 'text' | 'shadow';

export interface CardProps {
	children: Snippet;
	variant?: variant;
	class?: string;
}
export interface CardContentProps {
	children: Snippet;
	class?: string;
}
export interface CardHeaderProps {
	children: Snippet;
	class?: string;
}
export interface CardFooterProps {
	children: Snippet;
	class?: string;
}
