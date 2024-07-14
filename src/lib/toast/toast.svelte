<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div
	class="absolute bottom-0 right-0 flex h-16 w-64 items-center rounded-md bg-white px-4 dark:bg-neutral-800 {className}"
>
	<slot></slot>
</div>
