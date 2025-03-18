<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<ul class="mt-5 flex {className}">
	{@render children?.()}
</ul>
