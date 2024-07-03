<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Textarea from '$lib/textarea/textarea.svelte';

	let code = `<Textarea placeholder="What's on your mind?"></Textarea>`;
</script>

<svelte:head>
	<title>Svelte Components - Textarea</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Textarea placeholder="What's on your mind?"></Textarea>
	</div>
	<Highlight {code} />
</div>
