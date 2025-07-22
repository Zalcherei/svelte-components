import type { Snippet } from 'svelte';

export interface ChatBubbleProps {
	children: Snippet;
	class?: string;
}

export interface ChatBubbleItemProps {
	children: Snippet;
	alignment?: string;
}
