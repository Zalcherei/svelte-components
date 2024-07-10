<script>
	let clazz = '';
	export let variant = '';
	export { clazz as class };
</script>

<ul
	class="flex w-auto overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none {variant ===
	'row'
		? 'flex-row'
		: variant === 'col'
			? 'flex-col'
			: ''} {clazz}"
>
	<slot></slot>
</ul>
