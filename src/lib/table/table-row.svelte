<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<tr class="h-10 {className}">
	{@render children?.()}
</tr>
