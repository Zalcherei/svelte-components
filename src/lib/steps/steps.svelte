<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<ul class="flex {className}">
	{@render children?.()}
</ul>
