<script>
	let clazz = '';
	export { clazz as class };
</script>

<div
	class="w-full rounded-t-md border-x border-t border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800"
>
	<div class="flex items-center justify-center gap-2 p-4 {clazz}">
		<slot></slot>
	</div>
</div>
