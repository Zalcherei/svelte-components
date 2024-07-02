<script>
	import Button from '$lib/button/button.svelte';
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

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Pagination controls={true}>
			<Button>1</Button>
			<Button>2</Button>
			<Button>3</Button>
			<Button>4</Button>
		</Pagination>
	</div>
	<Highlight {code} />
</div>
