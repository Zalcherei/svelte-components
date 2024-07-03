<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Stat from '$lib/stat/stat.svelte';

	let code = `<Stat />`;
</script>

<svelte:head>
	<title>Svelte Components - Stat</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Stat />
	</div>
	<Highlight {code} />
</div>
