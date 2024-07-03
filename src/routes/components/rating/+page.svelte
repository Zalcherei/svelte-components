<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Rating from '$lib/rating/rating.svelte';

	let code = `<Rating stars={5} />`;
</script>

<svelte:head>
	<title>Svelte Components - Rating</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Rating stars={5} />
	</div>
	<Highlight {code} />
</div>
