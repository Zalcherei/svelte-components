<script lang="ts">
	import Navbar from '$lib/navbar/navbar.svelte';

	let { children, class: className = '' } = $props();
</script>

<Navbar class="absolute bottom-0 px-0 {className}">
	{@render children?.()}
</Navbar>
