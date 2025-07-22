import type { Snippet } from 'svelte';

export interface TimelineProps {
	children: Snippet;
	class?: string;
}

export interface TimelineItemProps {
	date?: string;
	title?: string;
	last?: boolean;
}
