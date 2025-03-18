<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div class="flex h-16 w-full items-center rounded-md bg-white px-4 dark:bg-neutral-800 {className}">
	{@render children?.()}
</div>
