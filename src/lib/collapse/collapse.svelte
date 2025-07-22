<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import { slide } from 'svelte/transition';
	import type { CollapseProps } from '$lib/collapse/types';
	import { cn } from '$lib/utils';

	let { children, class: className, variant, title }: CollapseProps = $props();
	let accordion = $state(false);
	function handleClick() {
		accordion = !accordion;
	}
</script>

<div
	class={cn(
		'mb-1 flex w-full flex-col overflow-hidden rounded-md bg-white dark:bg-neutral-800',
		variant === 'outlined'
			? 'border border-gray-200 shadow-none dark:border-neutral-700'
			: variant === 'text'
				? 'shadow-none'
				: variant === 'shadow'
					? 'shadow'
					: '',
		className
	)}
>
	<Button class="w-full !justify-start !rounded-none" onclick={handleClick}>
		{title}
	</Button>
	{#if accordion}
		<div
			class={cn('p-4', accordion ? 'border-t border-gray-200 dark:border-neutral-700' : '')}
			transition:slide
		>
			{@render children?.()}
		</div>
	{/if}
</div>
