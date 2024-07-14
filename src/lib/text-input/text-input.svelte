<script lang="ts">
	let className: string = '';
	export { className as class };
	export let placeholder: string = '';
</script>

<input
	class="h-10 rounded-md border border-gray-200 bg-white px-4 outline-none focus:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 {className}"
	type="text"
	{placeholder}
/>
