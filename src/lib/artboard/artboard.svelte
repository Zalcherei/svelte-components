<script lang="ts">
	let className: string = '';
	export let width: string = '0';
	export let height: string = '0';
	export { className as class };
</script>

<div
	class="flex h-{height} w-{width} items-center justify-center rounded-md border border-gray-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 {className}"
>
	{height}x{width}
</div>
