<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<span
	class="flex items-center justify-center rounded-full bg-gray-100 px-3 text-sm dark:bg-neutral-800 {className}"
>
	<slot></slot>
</span>
