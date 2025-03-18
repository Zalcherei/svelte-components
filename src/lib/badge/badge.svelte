<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<span
	class="flex items-center justify-center rounded-full bg-gray-100 px-3 text-sm dark:bg-neutral-800 {className}"
>
	{@render children?.()}
</span>
