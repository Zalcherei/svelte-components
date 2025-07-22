import type { Snippet } from 'svelte';

export interface LinkProps {
	children: Snippet;
	class?: string;
	href?: string;
	target?: string;
}
