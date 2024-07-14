<script lang="ts">
	let className: string = '';
	export let variant: string = '';
	export { className as class };
</script>

<ul
	class="flex w-auto overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none {variant ===
	'row'
		? 'flex-row'
		: variant === 'col'
			? 'flex-col'
			: ''} {className}"
>
	<slot></slot>
</ul>
