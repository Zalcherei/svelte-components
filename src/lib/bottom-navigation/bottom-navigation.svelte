<script>
	import Navbar from '$lib/navbar/navbar.svelte';

	let clazz = '';
	export { clazz as class };
</script>

<Navbar class="absolute bottom-0 px-0 {clazz}">
	<slot></slot>
</Navbar>
