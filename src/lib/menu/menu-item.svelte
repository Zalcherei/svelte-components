<script>
	export let href = '';
</script>

<li>
	<a class="flex h-10 w-full items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" {href}>
		<slot></slot>
	</a>
</li>
