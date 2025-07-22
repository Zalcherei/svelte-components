import type { Snippet } from 'svelte';

export interface PaginationProps {
	children: Snippet;
	class?: string;
	variant?: string;
	controls?: boolean;
}
