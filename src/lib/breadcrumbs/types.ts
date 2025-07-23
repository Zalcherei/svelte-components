import type { Snippet } from 'svelte';

export interface BreadcrumbsProps {
	children: Snippet;
	class?: string;
}

export interface BreadCrumbItemProps {
	children: Snippet;
	href?: string;
}
