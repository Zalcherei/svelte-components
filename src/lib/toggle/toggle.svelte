<script lang="ts">
	let className: string = '';
	export let id: string = '';
	export { className as class };
</script>

<label for={id} class="relative flex cursor-pointer items-center {className}">
	<input type="checkbox" {id} class="peer sr-only" />
	<div class="h-4 w-10 rounded-full bg-gray-200 shadow-inner dark:bg-neutral-700"></div>
	<div
		class="absolute h-6 w-6 rounded-full bg-white shadow transition peer-checked:translate-x-full peer-checked:bg-gray-100 dark:bg-neutral-600 peer-checked:dark:bg-neutral-500"
	></div>
	<span class="ml-2"><slot></slot></span>
</label>
