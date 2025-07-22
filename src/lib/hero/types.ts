import type { Snippet } from 'svelte';

export interface HeroProps {
	children: Snippet;
	class?: string;
	title?: string;
	description?: string;
}
