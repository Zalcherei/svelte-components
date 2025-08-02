<script lang="ts">
	import type { DialogProps } from '$lib/types';
	import { cn } from '$lib/utils';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const {
		children,
		params = { duration: 100, easing: quintOut },
		transition = fly,
		class: className
	}: DialogProps = $props();
</script>

<div
	class={cn(
		'fixed top-0 left-0 flex h-screen w-screen items-center justify-center shadow backdrop-blur-sm',
		className
	)}
	transition:transition={params}
>
	<div class="flex w-96 flex-col rounded-md bg-sidebar shadow">
		{@render children?.()}
	</div>
</div>
