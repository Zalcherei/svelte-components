<script lang="ts">
	let { class: className = '', width = '0', height = '0' } = $props();
</script>

<div
	class="flex h-{height} w-{width} items-center justify-center rounded-md border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 {className}"
>
	{height}x{width}
</div>
