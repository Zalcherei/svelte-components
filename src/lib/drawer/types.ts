import type { ParamsType, TransitionFunction } from '$lib/types';
import type { Snippet } from 'svelte';

export interface DrawerProps {
	children: Snippet;
	open?: boolean;
	class?: string;
	params?: ParamsType;
	transition?: TransitionFunction;
}
