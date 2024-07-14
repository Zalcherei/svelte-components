<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex w-full flex-col {className}">
	<div class="flex max-w-max overflow-hidden rounded-t-md bg-white dark:bg-neutral-800">
		<slot></slot>
	</div>
</div>
