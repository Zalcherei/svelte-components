<script>
	let clazz = '';
	export let variant = '';
	export { clazz as class };
</script>

<footer
	class="absolute bottom-0 flex h-10 w-full items-center justify-center bg-white dark:bg-neutral-800 {clazz} {variant ===
	'outlined'
		? 'border border-gray-200 shadow-none dark:border-neutral-700'
		: variant === 'text'
			? 'shadow-none'
			: variant === 'shadow'
				? 'shadow'
				: ''}"
>
	<slot></slot>
</footer>
