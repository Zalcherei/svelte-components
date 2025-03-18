<script lang="ts">
	let { children, class: className = '', href = '', target = '' } = $props();
</script>

<a class="hover:text-gray-700 hover:underline {className}" {href} {target}>
	{@render children?.()}
</a>
