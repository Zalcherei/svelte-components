<script lang="ts">
	import Navbar from '$lib/navbar/navbar.svelte';

	let className: string = '';
	export { className as class };
</script>

<Navbar class="absolute bottom-0 px-0 {className}">
	<slot></slot>
</Navbar>
