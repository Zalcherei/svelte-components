<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<div class="p-4 {className}">
	<slot></slot>
</div>
