<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div
	class="w-full rounded-t-md border-x border-t border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800"
>
	<div class="flex items-center justify-center gap-2 p-4 {className}">
		<slot></slot>
	</div>
</div>
