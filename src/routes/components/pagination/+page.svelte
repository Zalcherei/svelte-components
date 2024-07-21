<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

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

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Pagination
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/pagination"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Pagination variant="text" controls={true}>
			<Button variant="text" label="1" />
			<Button variant="text" label="2" />
			<Button variant="text" label="3" />
			<Button variant="text" label="4" />
		</Pagination>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
