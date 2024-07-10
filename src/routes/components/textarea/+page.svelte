<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import TableHeader from '$lib/table/table-header.svelte';
	import TableRow from '$lib/table/table-row.svelte';
	import Table from '$lib/table/table.svelte';
	import Textarea from '$lib/textarea/textarea.svelte';

	let code = `<Textarea resize="resize/x/y/resize-none" placeholder="What's on your mind?"></Textarea>`;
</script>

<svelte:head>
	<title>Svelte Components - Textarea</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Default Usage</h3>

<HighlightDisplay>
	<Textarea resize="resize-none" placeholder="What's on your mind?"></Textarea>
</HighlightDisplay>
<Highlight {code} />
