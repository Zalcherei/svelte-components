<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex h-16 w-full items-center border-t border-gray-200 px-4 {className}">
	<slot></slot>
</div>
