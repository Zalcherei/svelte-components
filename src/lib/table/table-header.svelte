<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<thead>
	<tr class="h-10 bg-gray-200 dark:bg-neutral-800 {className}">
		<slot></slot>
	</tr>
</thead>
