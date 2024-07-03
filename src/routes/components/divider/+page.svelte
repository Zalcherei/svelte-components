<script>
	import Divider from '$lib/divider/divider.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Divider />`;
</script>

<svelte:head>
	<title>Svelte Components - Divider</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<Divider />
	<Highlight {code} />
</div>
