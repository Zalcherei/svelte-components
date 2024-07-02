<script>
	import { createEventDispatcher } from 'svelte';

	let clazz = '';
	export let size = '';
	export { clazz as class };

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click');
	};
</script>

<button
	class="me-1 inline-flex h-10 min-w-10 items-center justify-center bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 {clazz} {size ===
	'icon'
		? 'rounded-full'
		: 'rounded-md px-4'}"
	on:click={handleClick}
>
	<slot></slot>
</button>
