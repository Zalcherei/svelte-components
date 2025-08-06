<script>
  import Pagination from '$lib/pagination/pagination.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';

	let currentPage = $state(1);
	const totalPages = 10;

	function handlePageChange(page) {
		currentPage = page;
	}
</script>

<svelte:head>
	<title>Svelte Components - Pagination</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Pagination" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/pagination">
{#snippet display()}
<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
{/snippet}

```html
<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
```
</Mdsvex>
