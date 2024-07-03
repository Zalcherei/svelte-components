<script>
	import Artboard from '$lib/artboard/artboard.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Artboard />`;
</script>

<svelte:head>
	<title>Svelte Components - Artboard</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Artboard />
	</div>
	<Highlight {code} />
</div>
