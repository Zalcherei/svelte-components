<script>
	import { quintInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let clazz = '';
	export { clazz as class };
</script>

<div
	class="h-screen w-64 overflow-y-auto bg-white p-2 shadow dark:bg-neutral-800 {clazz}"
	transition:slide={{ axis: 'x', easing: quintInOut }}
>
	<slot></slot>
</div>
