<script lang="ts">
	let className: string = '';
	export { className as class };
	export let align: string = '';
</script>

<div
	class="absolute hidden min-w-max items-center justify-center rounded-md bg-gray-100 px-4 py-2 shadow group-hover:flex dark:bg-neutral-800 {align ===
	'left'
		? '-left-2 -translate-x-full'
		: align === 'top'
			? '-top-2 -translate-y-full'
			: align === 'bottom'
				? '-bottom-2 translate-y-full'
				: align === 'right'
					? '-right-2 translate-x-full'
					: ''} {className}"
>
	<slot></slot>
</div>
