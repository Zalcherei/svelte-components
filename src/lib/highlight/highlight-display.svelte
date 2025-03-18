<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div
	class="grid min-h-64 place-items-center border-r border-gray-200 dark:border-neutral-700 {className}"
>
	<slot></slot>
</div>
