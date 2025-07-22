import type { Snippet } from 'svelte';

type align = 'left' | 'top' | 'bottom' | 'right' | string;

export interface TooltipProps {
	children: Snippet;
	class?: string;
	align?: align;
}
