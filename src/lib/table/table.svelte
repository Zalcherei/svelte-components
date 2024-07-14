<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<table class="w-full overflow-hidden rounded-md {className}">
	<slot></slot>
</table>
