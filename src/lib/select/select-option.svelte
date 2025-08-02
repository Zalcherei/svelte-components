<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	let {
		children,
		value,
		...restProps
	}: {
		children?: Snippet;
		value?: string;
		'data-value'?: string;
	} = $props();

	const { selected, isOpen } = getContext('select');
	let el: HTMLLIElement;

	const handleClick = () => {
		if (value === 'clear') {
			selected.set('');
		} else {
			selected.set(value);
		}
		isOpen.set(false);
	};
</script>

<li
	bind:this={el}
	role="option"
	tabindex="-1"
	class="item-center flex cursor-pointer gap-2 rounded-md p-2.5 transition-colors dark:hover:bg-neutral-700"
	onclick={handleClick}
	data-value
	{...restProps}
>
	{@render children?.()}
</li>
