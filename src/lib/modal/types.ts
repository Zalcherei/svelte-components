import type { ParamsType, TransitionFunction } from '$lib/types';
import type { Snippet } from 'svelte';

export interface ModalProps {
	children: Snippet;
	class?: string;
	params?: ParamsType;
	transition?: TransitionFunction;
}

export interface ModalContentProps {
	children: Snippet;
	class?: string;
}

export interface ModalFooterProps {
	children: Snippet;
	class?: string;
}

export interface ModalHeaderProps {
	children: Snippet;
	class?: string;
}
