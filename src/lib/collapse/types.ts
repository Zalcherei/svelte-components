import type { Snippet } from 'svelte';

type variant = 'outlined' | 'text' | 'shadow' | string;

export interface CollapseProps {
	children: Snippet;
	class?: string;
	variant?: variant;
	title?: string;
}
