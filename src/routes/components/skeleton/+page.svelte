<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Skeleton from '$lib/skeleton/skeleton.svelte';

	let code = `<Skeleton />`;
</script>

<svelte:head>
	<title>Svelte Components - Skeleton</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Skeleton />
	</div>
	<Highlight {code} />
</div>
