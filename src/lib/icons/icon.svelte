<script lang="ts">
	import type { IconNode, Attrs } from './types';

	export let name: string | undefined = undefined;
	export let color = 'currentColor';
	export let size: number | string = 24;
	export let strokeWidth: number | string = 2;
	export let absoluteStrokeWidth: boolean = false;
	export let iconNode: IconNode = [];

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
	const merge = <ClassType = string | undefined | null,>(...classes: ClassType[]) =>
		classes
			.filter((className, index, array) => {
				return Boolean(className) && array.indexOf(className) === index;
			})
			.join(' ');
</script>

<svg
	{...defaultAttributes}
	{...$$restProps}
	width={size}
	height={size}
	stroke={color}
	stroke-width={absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth}
	class={merge('svelte-icon', 'svelte', name ? `svelte-${name}` : '', $$props.class)}
>
	{#each iconNode as [tag, attrs]}
		<svelte:element this={tag} {...attrs} />
	{/each}
	<slot />
</svg>
