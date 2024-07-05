<script>
	let clazz = '';
	export { clazz as class };
</script>

<div
	class="flex h-[calc(100vh-64px)] w-64 min-w-64 flex-col border-r border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 [&>button]:justify-start {clazz}"
>
	<slot></slot>
</div>
