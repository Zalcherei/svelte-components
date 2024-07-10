<script>
	let clazz = '';
	export { clazz as class };
	export let href = '';
	export let target = '';
</script>

<a class="hover:text-gray-700 hover:underline {clazz}" {href} {target}>
	<slot></slot>
</a>
