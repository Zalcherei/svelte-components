<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<table class="w-full overflow-hidden rounded-md {className}">
	{@render children?.()}
</table>
