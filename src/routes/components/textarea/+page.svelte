<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Textarea from '$lib/textarea/textarea.svelte';

	let code = `<Textarea placeholder="What's on your mind?"></Textarea>`;
</script>

<svelte:head>
	<title>Svelte Components - Textarea</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Textarea placeholder="What's on your mind?"></Textarea>
</HighlightDisplay>
<Highlight {code} />
