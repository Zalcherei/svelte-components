<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ComponentType } from 'svelte';
	import type Icon from '$lib/icons/icon.svelte.d.ts';
	import LabelIcon from '$lib/button/label-icon.svelte';

	let className: string = '';
	export let target: string = '';
	export let href: string = '';
	export let variant: string = '';
	export let size: number | string = '';
	export let label: string = '';
	export let icon: ComponentType<Icon> | null = null;
	export let prepend: boolean = false;
	export let append: boolean = false;
	export { className as class };

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
	};

	$: computedClass = `
			relative grid grid-flow-col bg-white shadow transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700
			${size === 'icon' ? 'rounded-full p-3' : 'rounded-md px-4 py-2'}
			${className}
			${variant === 'outlined' ? 'border border-gray-200 shadow-none dark:border-neutral-700' : variant === 'text' ? 'shadow-none' : ''}
		`.trim();
</script>

{#if href}
	<a class={computedClass} {target} {href}>
		<LabelIcon {icon} {label} {prepend} {append} />
		<slot></slot>
	</a>
{:else}
	<button class={computedClass} on:click={handleClick}>
		<LabelIcon {icon} {label} {prepend} {append} />
		<slot></slot>
	</button>
{/if}
