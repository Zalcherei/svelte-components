import type { Snippet } from 'svelte';

type variant = 'outlined' | 'text' | 'shadow' | string;

export interface FooterProps {
	children: Snippet;
	class?: string;
	variant?: variant;
}
