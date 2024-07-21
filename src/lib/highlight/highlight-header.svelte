<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div
	class="col-span-2 flex h-12 items-center justify-between gap-2 border-b border-gray-200 bg-gray-100 px-4 {className}"
>
	<slot></slot>
</div>
