<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Loading from '$lib/loading/loading.svelte';

	let code = `<Loading />`;
</script>

<svelte:head>
	<title>Svelte Components - Loading</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Loading />
	</div>
	<Highlight {code} />
</div>
