<script lang="ts">
	let className: string = '';
	export let variant: string = '';
	export { className as class };
</script>

<footer
	class="absolute bottom-0 flex h-10 w-full items-center justify-center bg-white dark:bg-neutral-800 {variant ===
	'outlined'
		? 'border border-gray-200 shadow-none dark:border-neutral-700'
		: variant === 'text'
			? 'shadow-none'
			: variant === 'shadow'
				? 'shadow'
				: ''} {className}"
>
	<slot></slot>
</footer>
