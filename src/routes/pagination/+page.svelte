<script>
	import Button from '$lib/button/button.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Pagination</title>
</svelte:head>

<div class="flex justify-center">
	<Pagination controls={true}>
		<Button>1</Button>
		<Button>2</Button>
		<Button>3</Button>
		<Button>4</Button>
	</Pagination>
</div>
