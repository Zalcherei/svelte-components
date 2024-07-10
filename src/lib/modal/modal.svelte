<script>
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
</script>

<div
	class="fixed left-0 top-0 flex h-screen w-screen items-center justify-center shadow backdrop-blur-sm dark:bg-neutral-500"
	transition:fly={{ duration: 100, easing: quintOut }}
>
	<div class="flex w-96 flex-col rounded-md bg-white shadow dark:bg-neutral-800">
		<slot></slot>
	</div>
</div>
