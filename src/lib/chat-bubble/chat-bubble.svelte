<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="flex w-full flex-col {className}">
	<slot></slot>
</div>
