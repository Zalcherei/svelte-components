import type { Snippet } from 'svelte';

type variant = 'shadow' | string;

export interface NavbarProps {
	children: Snippet;
	class?: string;
	variant?: variant;
}
