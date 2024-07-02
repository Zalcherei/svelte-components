<script>
	let clazz = '';
	export { clazz as class };
</script>

<footer
	class="absolute bottom-0 flex h-10 w-full items-center justify-center bg-white dark:bg-neutral-800 {clazz}"
>
	<slot></slot>
</footer>
