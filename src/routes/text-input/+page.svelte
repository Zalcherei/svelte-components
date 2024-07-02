<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import TextInput from '$lib/text-input/text-input.svelte';

	let code = `<TextInput placeholder="What's on your mind?" />`;
</script>

<svelte:head>
	<title>Svelte Components - Text input</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<TextInput placeholder="What's on your mind?" />
	</div>
	<Highlight {code} />
</div>
