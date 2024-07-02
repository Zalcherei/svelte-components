<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';

	let code = `<Navbar></Navbar>`;
</script>

<svelte:head>
	<title>Svelte Components - Navbar</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<Navbar></Navbar>
	<Highlight {code} />
</div>
