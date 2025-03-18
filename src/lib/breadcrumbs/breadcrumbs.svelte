<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div>
	<ul
		class="flex [&>*]:me-2 [&>*]:after:content-['>'] [&>*:last-child]:after:content-[''] {className}"
	>
		{@render children?.()}
	</ul>
</div>
