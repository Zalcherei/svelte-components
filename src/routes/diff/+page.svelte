<script>
	import Diff from '$lib/diff/diff.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Diff alt="..." src="https://picsum.photos/id/800/800/300" />`;
</script>

<svelte:head>
	<title>Svelte Components - Diff</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Diff alt="..." src="https://picsum.photos/id/800/800/300" />
	</div>
	<Highlight {code} />
</div>
