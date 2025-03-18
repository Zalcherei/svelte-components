<script lang="ts">
	import type { Attrs } from './types';

	const {
		children,
		name,
		color = 'currentColor',
		size = 24,
		strokeWidth = 2,
		absoluteStrokeWidth = false,
		iconNode = [],
		...props
	} = $props();

	const defaultAttributes: Attrs = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: 24,
		height: 24,
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		'stroke-width': 2,
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	};
</script>

<svg
	{...defaultAttributes}
	{...props}
	width={size}
	height={size}
	stroke={color}
	stroke-width={absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth}
	class={['svelte-icon', name && `svelte-${name}`, props.class]}
>
	{#each iconNode as [tag, attrs]}
		<svelte:element this={tag} {...attrs} />
	{/each}
	{@render children?.()}
</svg>
