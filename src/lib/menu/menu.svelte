<script lang="ts">
	let { children, class: className = '', variant = '' } = $props();
</script>

<ul
	class="flex w-auto overflow-hidden rounded-md bg-white dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none {variant ===
	'row'
		? 'flex-row'
		: variant === 'col'
			? 'flex-col'
			: ''} {className}"
>
	{@render children?.()}
</ul>
