<script>
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';

	let code = `<Pagination controls={true}>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </Pagination>`;
</script>

<svelte:head>
	<title>Svelte Components - Pagination</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Pagination variant="text" controls={true}>
		<Button variant="text">1</Button>
		<Button variant="text">2</Button>
		<Button variant="text">3</Button>
		<Button variant="text">4</Button>
	</Pagination>
</HighlightDisplay>
<Highlight {code} />
