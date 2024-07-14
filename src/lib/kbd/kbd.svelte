<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<kbd
	class="me-1 flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-3 dark:border-neutral-700 dark:bg-neutral-800 {className}"
>
	<slot></slot>
</kbd>
