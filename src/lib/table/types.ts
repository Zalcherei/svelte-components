import type { Snippet } from 'svelte';

export interface TableProps {
	children: Snippet;
	class?: string;
}

export interface TableHeaderProps {
	children: Snippet;
	class?: string;
}

export interface TableRowProps {
	children: Snippet;
	class?: string;
}
