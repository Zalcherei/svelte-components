<script>
	import { quintInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
</script>

<div
	class="h-[calc(100vh-32px)] w-64 overflow-y-auto bg-white p-2 shadow dark:bg-neutral-800"
	transition:slide={{ axis: 'x', easing: quintInOut }}
>
	<slot></slot>
</div>
