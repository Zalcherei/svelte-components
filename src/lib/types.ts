import type {
	BlurParams,
	FadeParams,
	FlyParams,
	ScaleParams,
	SlideParams,
	TransitionConfig
} from 'svelte/transition';

export type ParamsType =
	| FadeParams
	| BlurParams
	| FlyParams
	| SlideParams
	| ScaleParams
	| undefined;

export type TransitionFunction = (node: HTMLElement, params: ParamsType) => TransitionConfig;
