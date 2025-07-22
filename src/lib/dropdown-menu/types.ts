import type { ParamsType, TransitionFunction } from '$lib/types';
import type { Snippet } from 'svelte';
import type { Writable } from 'svelte/store';

export interface DropdownMenuContext {
	open: Writable<boolean>;
	toggle: () => void;
}

export interface DropdownMenuProps {
	children: Snippet;
	open?: boolean;
	class?: string;
}

export interface DropdownMenuContentProps {
	children: Snippet;
	open?: Writable<boolean>;
	class?: string;
	params?: ParamsType;
	transition?: TransitionFunction;
}

export interface DropdownMenuTriggerProps {
	children: Snippet;
	open?: Writable<boolean>;
	class?: string;
}
