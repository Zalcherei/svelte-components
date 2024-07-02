<script>
	export let align = '';
</script>

<div
	class="absolute flex hidden h-8 min-w-max items-center justify-center rounded-md bg-white px-4 group-hover:flex dark:bg-neutral-800 {align ===
	'left'
		? '-left-2 -translate-x-full'
		: align === 'top'
			? '-top-2 -translate-y-full'
			: align === 'bottom'
				? '-bottom-2 translate-y-full'
				: align === 'right'
					? '-right-2 translate-x-full'
					: ''}"
>
	<slot></slot>
</div>
