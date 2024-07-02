<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import RadialProgress from '$lib/radial-progress/radial-progress.svelte';

	let code = `<RadialProgress progress={75} theme="dark" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radial progress</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<RadialProgress progress={75} theme="dark" />
	</div>
	<Highlight {code} />
</div>
