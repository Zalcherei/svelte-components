<script>
	let clazz = '';
	export let variant = '';
	export { clazz as class };
</script>

<div
	class="flex w-full flex-col rounded-md bg-white dark:bg-neutral-800 {clazz} {variant ===
	'outlined'
		? 'border border-gray-200 shadow-none dark:border-neutral-700'
		: variant === 'text'
			? 'shadow-none'
			: variant === 'shadow'
				? 'shadow'
				: ''}"
>
	<slot></slot>
</div>
