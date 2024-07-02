<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import ThemeController from '$lib/theme-controller/theme-controller.svelte';

	let code = `<ThemeController />`;
</script>

<svelte:head>
	<title>Svelte Components - Swap</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<ThemeController />
	</div>
	<Highlight {code} />
</div>
