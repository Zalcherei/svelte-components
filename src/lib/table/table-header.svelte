<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<thead>
	<tr class="h-10 bg-gray-200 dark:bg-neutral-800 {className}">
		{@render children?.()}
	</tr>
</thead>
