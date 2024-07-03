<script>
	import Alert from '$lib/alert/alert.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Alert>Alert</Alert>`;
</script>

<svelte:head>
	<title>Svelte Components - Alert</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<Alert>Alert</Alert>
	<Highlight {code} />
</div>
