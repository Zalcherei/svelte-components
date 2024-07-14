<script lang="ts">
	let className: string = '';
	export { className as class };
	export let href: string = '';
</script>

<li>
	<a
		class="flex h-10 w-full items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700 {className}"
		{href}
	>
		<slot></slot>
	</a>
</li>
