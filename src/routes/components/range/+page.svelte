<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Range from '$lib/range/range.svelte';

	let code = `<Range />`;
</script>

<svelte:head>
	<title>Svelte Components - Range</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<Range />
	<Highlight {code} />
</div>
