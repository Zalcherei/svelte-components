<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import type { CollapseProps } from '$lib/types';

	let { children, class: className, title }: CollapseProps = $props();

	let accordion = $state(false);

	function handleClick() {
		accordion = !accordion;
	}
</script>

<div class={cn('mb-1 flex w-full flex-col overflow-hidden rounded-md', className)}>
	<Button variant="ghost" class="w-full justify-start rounded-none" onclick={handleClick}>
		{title}
	</Button>
	{#if accordion}
		<div class={cn('p-4', accordion ? 'border-t' : '')} transition:slide>
			{@render children?.()}
		</div>
	{/if}
</div>
