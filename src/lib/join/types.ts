import type { Snippet } from 'svelte';

type direction = 'horizontal' | 'vertical';

export interface JoinProps {
	children: Snippet;
	class?: string;
	direction?: direction;
}
