<script lang="ts">
	let { class: className = '' } = $props();
</script>

<input
	class="rounded-md border border-gray-200 bg-gray-100 file:h-10 file:cursor-pointer file:rounded-l-md file:border-0 file:bg-gray-200 file:px-4 file:transition file:hover:bg-gray-300 dark:border-neutral-700 dark:bg-neutral-800 file:dark:bg-neutral-900 file:dark:text-white file:dark:hover:bg-neutral-700 {className}"
	type="file"
/>
