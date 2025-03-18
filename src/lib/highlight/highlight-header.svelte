<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div
	class="col-span-2 flex h-12 items-center justify-between gap-2 border-b border-gray-200 bg-gray-100 px-4 dark:border-neutral-700 dark:bg-neutral-800 {className}"
>
	<slot></slot>
</div>
