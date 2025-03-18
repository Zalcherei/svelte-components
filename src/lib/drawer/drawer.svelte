<script lang="ts">
	import { slide } from 'svelte/transition';
	let { children, class: className = '' } = $props();
</script>

<aside
	class="hidden w-64 flex-col border-r border-gray-200 bg-white lg:flex dark:border-neutral-700 dark:bg-neutral-800 [&>button]:justify-start {className}"
	transition:slide={{ axis: 'x' }}
>
	{@render children?.()}
</aside>
