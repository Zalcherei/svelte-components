<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Progress from '$lib/progress/progress.svelte';

	let code = `<Progress value="50"/>`;
</script>

<svelte:head>
	<title>Svelte Components - Progress</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Progress value="50" />
	</div>
	<Highlight {code} />
</div>
