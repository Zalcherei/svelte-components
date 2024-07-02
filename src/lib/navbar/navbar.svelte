<script>
	let clazz = '';
	export { clazz as class };
</script>

<nav class="flex h-16 w-full items-center justify-center bg-white dark:bg-neutral-800 {clazz}">
	<slot></slot>
</nav>
