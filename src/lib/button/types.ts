import type { Snippet } from 'svelte';

export interface ButtonProps {
	children: Snippet;
	href?: string;
	target?: string;
	type?: 'button' | 'submit' | 'reset' | null | undefined;
	tag?: 'button' | 'a';
	disabled?: boolean;
	class?: string;
	onclick?: () => void;
	'aria-label'?: string;
}
