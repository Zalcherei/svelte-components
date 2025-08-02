import type { Snippet } from 'svelte';
import type { HTMLAttributeAnchorTarget, HTMLInputTypeAttribute } from 'svelte/elements';
import type { Writable } from 'svelte/store';
import type {
	BlurParams,
	FadeParams,
	FlyParams,
	ScaleParams,
	SlideParams,
	TransitionConfig
} from 'svelte/transition';

type ParamsType = FadeParams | BlurParams | FlyParams | SlideParams | ScaleParams | undefined;

type TransitionFunction = (node: HTMLElement, params: ParamsType) => TransitionConfig;

type size = 'lg' | 'md' | 'sm' | string;

type menuVariant = 'row' | 'col' | string;

type radialTheme = 'dark' | 'light' | string;

type selector = 'single' | 'multiple';

type resize = 'resize' | 'x' | 'y' | 'resize-none' | string;

type align = 'left' | 'top' | 'bottom' | 'right' | string;

type buttonVariant = 'default' | 'ghost' | undefined;

type buttonSize = 'default' | 'icon' | undefined;

export interface BaseProps {
	children: Snippet;
	class?: string;
}

export interface Context {
	open: Writable<boolean>;
	toggle: () => void;
}

export interface AccordionProps extends BaseProps {
	open?: boolean;
}

export interface AccordionContentProps extends BaseProps {
	params?: ParamsType;
	transition?: TransitionFunction;
}

export interface AvatarProps {
	class?: string;
	size?: size;
	src?: string;
	alt?: string;
}

export interface BreadCrumbItemProps extends BaseProps {
	href?: string;
}

export interface ButtonProps extends BaseProps {
	href?: string;
	target?: string;
	type?: 'button' | 'submit' | 'reset' | null | undefined;
	variant?: buttonVariant;
	size?: buttonSize;
	disabled?: boolean;
	onclick?: () => void;
	'aria-label'?: string;
}

export interface CarouselProps {
	currentIndex?: number;
	images?: ArrayLike<string | null | undefined>;
}

export interface CheckboxProps {
	checked?: boolean;
	class?: string;
	id?: string;
}

export interface CollapseProps extends BaseProps {
	title?: string;
}

export interface CountdownProps {
	timer?: number;
	class?: string;
}

export interface DialogProps extends BaseProps {
	params?: ParamsType;
	transition?: TransitionFunction;
}

export interface DividerProps {
	class?: string;
}

export interface DrawerProps extends BaseProps {
	open?: boolean;
	params?: ParamsType;
	transition?: TransitionFunction;
}

export interface DropdownMenuProps extends BaseProps {
	open?: boolean;
}

export interface DropdownMenuContentProps extends BaseProps {
	open?: Writable<boolean>;
	params?: ParamsType;
	transition?: TransitionFunction;
}

export interface DropdownMenuTriggerProps extends BaseProps {
	open?: Writable<boolean>;
}

export interface HighlightCodeProps {
	language?: string;
	highlightedCode?: string;
	code?: string;
}

export interface ImageComparisonProps {
	before: string;
	after: string;
	beforeAlt?: string;
	afterAlt?: string;
	initialPosition?: number;
}

export interface IndicatorProps {
	class?: string;
}

export interface LinkProps extends BaseProps {
	href?: string;
	target?: HTMLAttributeAnchorTarget | null | undefined;
}

export interface LoadingProps {
	class?: string;
}

export interface MenuProps extends BaseProps {
	variant?: menuVariant;
}

export interface MenuItemProps extends BaseProps {
	href?: string;
}

export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export interface ProgressProps {
	class?: string;
	value?: string | number | string[] | null | undefined;
}

export interface RadialProgressProps {
	class?: string;
	progress?: number;
	theme?: radialTheme;
}

export interface RadioProps {
	value?: string | number;
	name?: string;
	group?: string | number;
	class?: string;
}

export interface RangeProps {
	class?: string;
}

// export interface SelectContext {
// 	open: Writable<boolean>;
// 	toggle: () => void;
// }

export interface SelectProps extends BaseProps {
	open?: boolean;
	value?: string | number;
	type?: selector;
}

export interface SelectContentProps extends BaseProps {
	params?: ParamsType;
	transition?: TransitionFunction;
}

export interface SelectOptionProps extends BaseProps {
	value?: string | number;
}

export interface SelectContext {
	isOpen: Writable<boolean>;
	selected: Writable<string>;
	focusedIndex: Writable<number>;
	id: string;
}

export interface StepProps {
	title?: string;
	id?: string | number;
	complete?: boolean;
	last?: boolean;
}

export interface TabContext {
	open: Writable<string | number | undefined>;
}

export interface TabsProps extends BaseProps {
	value?: string | number;
}

export interface TabsTriggerProps extends BaseProps {
	value?: string | number;
}

export interface TabsContentProps extends BaseProps {
	value?: string | number;
}

export interface InputProps {
	type?: HTMLInputTypeAttribute | null | undefined;
	class?: string;
	placeholder?: string;
}

export interface TextareaProps {
	class?: string;
	placeholder?: string;
	resize?: resize;
}

export interface TimelineItemProps {
	date?: string;
	title?: string;
	last?: boolean;
}

export interface ToggleProps extends BaseProps {
	id?: string;
}

export interface TooltipProps extends BaseProps {
	align?: align;
}
