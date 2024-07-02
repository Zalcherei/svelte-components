<script>
	let clazz = '';
	export { clazz as class };
	export let href = '';
</script>

<a class="hover:text-gray-700 hover:underline {clazz}" {href}>
	<slot></slot>
</a>
