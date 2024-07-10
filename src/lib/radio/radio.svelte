<script>
	let clazz = '';
	export { clazz as class };
	export let checked = false;
	export let name = '';
</script>

<input class="me-1 h-5 w-5 cursor-pointer {clazz}" type="radio" {name} {checked} />
