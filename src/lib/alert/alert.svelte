<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex h-16 w-full items-center rounded-md bg-white px-4 dark:bg-neutral-800 {className}">
	<slot></slot>
</div>
