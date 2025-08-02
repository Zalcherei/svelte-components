<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />`;

	let currentPage = $state(1);
	const totalPages = 10;

	function handlePageChange(page: number) {
		currentPage = page;
	}
</script>

<svelte:head>
	<title>Svelte Components - Pagination</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Pagination
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/pagination"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
