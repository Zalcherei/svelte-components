<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toggle from '$lib/toggle/toggle.svelte';

	let code = `<Toggle>Toggle me</Toggle>`;
</script>

<svelte:head>
	<title>Svelte Components - Toggle</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Toggle>Toggle me</Toggle>
	</div>
	<Highlight {code} />
</div>
