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

//
// ──────────────────────────────────────────────────────────────
//   REUSABLE TYPES
// ──────────────────────────────────────────────────────────────
//

/** Common size values for components */
export type Size = 'lg' | 'md' | 'sm' | (string & {});

/** Layout variants for menus */
export type MenuVariant = 'row' | 'col' | (string & {});

/** Color theme variants for radial progress */
export type RadialTheme = 'dark' | 'light' | (string & {});

/** Selection modes for select components */
export type SelectorType = 'single' | 'multiple';

/** Resize modes for textarea components */
export type Resize = 'resize' | 'x' | 'y' | 'resize-none' | (string & {});

/** Tooltip alignment positions */
export type Align = 'left' | 'top' | 'bottom' | 'right' | (string & {});

/** Button style variants */
export type ButtonVariant = 'default' | 'ghost';

/** Button size variants */
export type ButtonSize = 'default' | 'icon';

/** All supported Svelte transition parameter types */
export type ParamsType = FadeParams | BlurParams | FlyParams | SlideParams | ScaleParams;

/** Transition function signature */
export type TransitionFunction = (node: HTMLElement, params?: ParamsType) => TransitionConfig;

/** Writable store containing a boolean */
export type BooleanStore = Writable<boolean>;
/** Writable store containing a string */
export type StringStore = Writable<string>;
/** Writable store containing a number */
export type NumberStore = Writable<number>;

//
// ──────────────────────────────────────────────────────────────
//   BASE INTERFACES
// ──────────────────────────────────────────────────────────────
//

/** Common props for most components */
export interface BaseProps {
	/** Inner content */
	children?: Snippet;
	/** CSS classes */
	class?: string;
	/** Inline style string */
	style?: string;
}

/** Props for components supporting transitions */
export interface TransitionProps {
	/** Transition parameters */
	params?: ParamsType;
	/** Transition function */
	transition?: TransitionFunction;
}

/** Props for components that have an optional ID */
export interface WithId {
	/** Unique identifier */
	id?: string | null | undefined;
}

//
// ──────────────────────────────────────────────────────────────
//   COMPONENT PROPS
// ──────────────────────────────────────────────────────────────
//

/** Shared store-based context with toggle control */
export interface Context {
	/** Whether the component is open */
	open: BooleanStore;
	/** Toggle open/closed state */
	toggle: () => void;
}

/** Accordion container */
export interface AccordionProps extends BaseProps {
	/** Whether the accordion is initially open */
	open?: boolean;
}

/** Accordion content with transition */
export interface AccordionContentProps extends BaseProps, TransitionProps {}

/** Avatar component */
export interface AvatarProps extends BaseProps {
	/** Avatar size */
	size?: Size;
	/** Image source */
	src?: string;
	/** Alternate text */
	alt?: string;
}

/** Single breadcrumb item */
export interface BreadCrumbItemProps extends BaseProps {
	/** Link URL */
	href?: string;
}

/** Button component */
export interface ButtonProps extends BaseProps {
	/** Link URL for anchor-style buttons */
	href?: string;
	/** Target for anchor-style buttons */
	target?: HTMLAttributeAnchorTarget;
	/** HTML button type */
	type?: 'button' | 'submit' | 'reset';
	/** Style variant */
	variant?: ButtonVariant;
	/** Size variant */
	size?: ButtonSize;
	/** Whether the button is disabled */
	disabled?: boolean;
	/** Click handler */
	onclick?: () => void;
	/** Accessible label for screen readers */
	'aria-label'?: string;
}

/** Image carousel */
export interface CarouselProps {
	/** Currently active image index */
	currentIndex?: number;
	/** List of image URLs */
	images?: string[];
}

/** Checkbox component */
export interface CheckboxProps extends BaseProps, WithId {
	/** Whether the checkbox is checked */
	checked?: boolean;
}

/** Collapsible section */
export interface CollapseProps extends BaseProps {
	/** Collapse title */
	title?: string;
}

/** Countdown timer */
export interface CountdownProps extends BaseProps {
	/** Countdown duration in ms */
	timer?: number;
}

/** Dialog modal */
export interface DialogProps extends BaseProps, TransitionProps {}

/** Horizontal divider line */
export interface DividerProps extends BaseProps {}

/** Drawer panel */
export interface DrawerProps extends BaseProps, TransitionProps {
	/** Whether the drawer is open */
	open?: boolean;
}

/** Dropdown menu container */
export interface DropdownMenuProps extends BaseProps {
	/** Whether the menu is open */
	open?: boolean;
}

/** Dropdown menu content */
export interface DropdownMenuContentProps extends BaseProps, TransitionProps {
	/** Store controlling open state */
	open?: BooleanStore;
}

/** Dropdown menu trigger */
export interface DropdownMenuTriggerProps extends BaseProps {
	/** Store controlling open state */
	open?: BooleanStore;
}

/** Syntax-highlighted code block */
export interface HighlightCodeProps {
	/** Language name */
	language?: string;
	/** Already highlighted code HTML */
	highlightedCode?: string;
	/** Raw code to highlight */
	code?: string;
}

/** Image comparison slider */
export interface ImageComparisonProps {
	/** Before image URL */
	before: string;
	/** After image URL */
	after: string;
	/** Before image alt text */
	beforeAlt?: string;
	/** After image alt text */
	afterAlt?: string;
	/** Initial slider position (0-1) */
	initialPosition?: number;
}

/** Notification or badge indicator */
export interface IndicatorProps extends BaseProps {}

/** Link component */
export interface LinkProps extends BaseProps {
	/** Link URL */
	href?: string;
	/** Anchor target attribute */
	target?: HTMLAttributeAnchorTarget;
}

/** Loading spinner */
export interface LoadingProps extends BaseProps {}

/** Menu container */
export interface MenuProps extends BaseProps {
	/** Layout direction */
	variant?: MenuVariant;
}

/** Single menu item */
export interface MenuItemProps extends BaseProps {
	/** Link URL */
	href?: string;
}

/** Pagination controls */
export interface PaginationProps {
	/** Current active page number */
	currentPage: number;
	/** Total number of pages */
	totalPages: number;
	/** Callback when a page is selected */
	onPageChange: (page: number) => void;
}

/** Progress bar */
export interface ProgressProps extends BaseProps {
	/** Progress value */
	value?: string | number | string[] | null;
}

/** Radial progress circle */
export interface RadialProgressProps extends BaseProps {
	/** Progress percentage (0-100) */
	progress?: number;
	/** Theme variant */
	theme?: RadialTheme;
}

/** Radio button */
export interface RadioProps extends BaseProps {
	/** Value bound to the radio button */
	value?: string | number;
	/** Name attribute */
	name?: string;
	/** Bound group value */
	group?: string | number;
}

/** Range slider */
export interface RangeProps extends BaseProps {}

/** Select dropdown */
export interface SelectProps extends BaseProps {
	/** Whether the select is open */
	open?: boolean;
	/** Selected value */
	value?: string | number;
	/** Selection mode */
	type?: SelectorType;
}

/** Select dropdown content */
export interface SelectContentProps extends BaseProps, TransitionProps {}

/** Single option in a select dropdown */
export interface SelectOptionProps extends BaseProps {
	/** Option value */
	value?: string | number;
}

/** Context for select components */
export interface SelectContext {
	/** Whether the select is open */
	isOpen: BooleanStore;
	/** Selected value */
	selected: StringStore;
	/** Currently focused option index */
	focusedIndex: NumberStore;
	/** Unique select identifier */
	id: string;
}

/** Step indicator */
export interface StepProps extends BaseProps, WithId {
	/** Step title */
	title?: string;
	/** Whether the step is completed */
	complete?: boolean;
	/** Whether this is the last step */
	last?: boolean;
}

/** Tab component context */
export interface TabContext {
	/** Active tab value */
	open: Writable<string | number | undefined>;
}

/** Tabs container */
export interface TabsProps extends BaseProps {
	/** Active tab value */
	value?: string | number;
}

/** Tab trigger button */
export interface TabsTriggerProps extends BaseProps {
	/** Tab value */
	value?: string | number;
}

/** Tab content panel */
export interface TabsContentProps extends BaseProps {
	/** Tab value this panel belongs to */
	value?: string | number;
}

/** Input field */
export interface InputProps extends BaseProps {
	/** Input type */
	type?: HTMLInputTypeAttribute;
	/** Placeholder text */
	placeholder?: string;
}

/** Textarea field */
export interface TextareaProps extends BaseProps {
	/** Placeholder text */
	placeholder?: string;
	/** Resize behavior */
	resize?: Resize;
}

/** Timeline item */
export interface TimelineItemProps extends BaseProps {
	/** Date label */
	date?: string;
	/** Title text */
	title?: string;
	/** Whether this is the last item */
	last?: boolean;
}

/** Toggle switch */
export interface ToggleProps extends BaseProps, WithId {}

/** Tooltip */
export interface TooltipProps extends BaseProps {
	/** Tooltip alignment */
	align?: Align;
}
