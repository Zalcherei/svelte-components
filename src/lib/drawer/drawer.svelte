<script lang="ts">
	import { slide } from 'svelte/transition';
	let className: string = '';
	export { className as class };
</script>

<aside
	class="hidden w-64 flex-col border-r border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 lg:flex [&>button]:justify-start {className}"
	transition:slide={{ axis: 'x' }}
>
	<slot></slot>
</aside>
