import type { ParamsType, TransitionFunction } from '$lib/types';
import type { Snippet } from 'svelte';
import type { Writable } from 'svelte/store';

type variant = 'outlined' | 'text' | string;

export interface AccordionContext {
	open: Writable<boolean>;
	toggle: () => void;
}

export interface AccordionProps {
	children: Snippet;
	open?: boolean;
	class?: string;
	variant?: variant;
}

export interface AccordionContentProps {
	children: Snippet;
	params?: ParamsType;
	transition?: TransitionFunction;
	class?: string;
}

export interface AccordionTriggerProps {
	children: Snippet;
	class?: string;
}
