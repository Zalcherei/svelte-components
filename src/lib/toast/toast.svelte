<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div
	class="absolute right-0 bottom-0 flex h-16 w-64 items-center rounded-md bg-white px-4 dark:bg-neutral-800 {className}"
>
	{@render children?.()}
</div>
