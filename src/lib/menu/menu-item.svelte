<script lang="ts">
	let { children, class: className = '', href = '' } = $props();
</script>

<li>
	<a
		class="flex h-10 w-full items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700 {className}"
		{href}
	>
		{@render children?.()}
	</a>
</li>
