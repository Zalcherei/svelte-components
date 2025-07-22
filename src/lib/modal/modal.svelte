<script lang="ts">
	import Header from '$lib/modal/modal-header.svelte';
	import Content from '$lib/modal/modal-content.svelte';
	import Footer from '$lib/modal/modal-footer.svelte';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import type { ModalProps } from '$lib/modal/types';

	let {
		children,
		params = { duration: 100, easing: quintOut },
		transition = fly,
		class: className
	}: ModalProps = $props();
</script>

<div
	class={cn(
		'fixed top-0 left-0 flex h-screen w-screen items-center justify-center shadow backdrop-blur-sm dark:bg-neutral-500',
		className
	)}
	transition:transition={params}
>
	<div class="flex w-96 flex-col rounded-md bg-white shadow dark:bg-neutral-800">
		{@render children?.()}
	</div>
</div>
