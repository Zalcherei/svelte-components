import type { Snippet } from 'svelte';

export interface StepProps {
	title?: string;
	id?: string | number;
	complete?: boolean;
	last?: boolean;
}

export interface StepsProps {
	children: Snippet;
	class?: string;
}
