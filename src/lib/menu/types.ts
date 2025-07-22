import type { Snippet } from 'svelte';

type variant = 'row' | 'col' | string;

export interface MenuProps {
	children: Snippet;
	class?: string;
	variant?: variant;
}

export interface MenuItemProps {
	children: Snippet;
	class?: string;
	href?: variant;
}
