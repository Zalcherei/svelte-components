import type { Snippet } from 'svelte';

type size = 'icon' | string;

type variant = 'outlined' | 'text' | string;

export interface ButtonProps {
	children: Snippet;
	size?: size;
	href?: string;
	target?: string;
	variant?: variant;
	type?: 'button' | 'submit' | 'reset' | null | undefined;
	tag?: 'button' | 'a';
	class?: string;
	onclick?: () => void;
	'aria-label'?: string;
}
