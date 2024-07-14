<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<tr class="h-10 {className}">
	<slot></slot>
</tr>
