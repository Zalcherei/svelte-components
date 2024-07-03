<script>
	import Badge from '$lib/badge/badge.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Badge>Badge</Badge>`;
</script>

<svelte:head>
	<title>Svelte Components - Badge</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Badge>Badge</Badge>
	</div>
	<Highlight {code} />
</div>
