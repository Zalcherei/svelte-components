<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div class="[&>:nth-child(2)]:-translate-y-1/2 [&>:nth-child(3)]:-translate-y-full {className}">
	{@render children?.()}
</div>
