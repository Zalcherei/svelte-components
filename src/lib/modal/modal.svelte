<script>
	import { fly } from 'svelte/transition';
</script>

<div
	class="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-100 opacity-50 dark:bg-neutral-500"
	transition:fly
>
	<div class="flex w-96 flex-col rounded-md bg-white shadow dark:bg-neutral-800">
		<slot></slot>
	</div>
</div>
