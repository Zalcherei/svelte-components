import type { Snippet } from 'svelte';

export interface HighlightProps {
	children: Snippet;
	class?: string;
}

export interface HighlightCodeProps {
	language?: string;
	highlightedCode?: string;
	code?: string;
}

export interface HighlightDisplayProps {
	children: Snippet;
	class?: string;
}

export interface HighlightTitleProps {
	children: Snippet;
	class?: string;
}
