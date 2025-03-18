<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type Icon from '$lib/icons/icon.svelte.d.ts';

	// export let icon: ComponentType<Icon> | null = null;
	// export let label: string = '';
	// export let prepend: boolean = false;
	// export let append: boolean = false;
	const { icon, label = '', prepend, append } = $props();
</script>

{#if prepend && icon}
	{label}
	{@const Component = icon}
	<Component this={icon} class="h-5 w-5" />
{:else if append && icon}
	{@const Component = icon}
	<Component this={icon} class="h-5 w-5" />
	{label}
{:else if icon}
	{@const Component = icon}
	<Component this={icon} class="h-5 w-5" />
	{label}
{:else}
	{label}
{/if}
