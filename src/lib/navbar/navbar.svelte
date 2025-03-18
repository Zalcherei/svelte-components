<script lang="ts">
	let { children, class: className = '', variant = '' } = $props();
</script>

<div
	class="flex h-16 min-h-16 w-full items-center border-b border-gray-200 bg-white px-4 dark:border-neutral-700 dark:bg-neutral-800 {variant ===
	'shadow'
		? '!border-0 !shadow'
		: ''} {className}"
>
	{@render children?.()}
</div>
