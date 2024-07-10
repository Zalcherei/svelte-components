<script>
	let clazz = '';
	export let width = '0';
	export let height = '0';
	export { clazz as class };
</script>

<div
	class="flex h-{height} w-{width} items-center justify-center rounded-md border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 {clazz}"
>
	{height}x{width}
</div>
