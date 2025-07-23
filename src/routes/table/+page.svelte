<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import TableHeader from '$lib/table/table-header.svelte';
	import TableRow from '$lib/table/table-row.svelte';
	import Table from '$lib/table/table.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import TableHead from '$lib/table/table-head.svelte';
	import TableCell from '$lib/table/table-cell.svelte';

	let code = `<Table>
  <TableHeader>
  	<TableRow>
      <TableHead>#</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Lastname</TableHead>
      <TableHead>Email</TableHead>
  	</TableRow>
  </TableHeader>
  <tbody>
  	<TableRow>
      <TableCell>1</TableCell>
      <TableCell>John</TableCell>
      <TableCell>Doe</TableCell>
      <TableCell>john.doe@email.email</TableCell>
  	</TableRow>
  	<TableRow>
      <TableCell>2</TableCell>
      <TableCell>Jane</TableCell>
      <TableCell>Doe</TableCell>
      <TableCell>jane.doe@email.email</TableCell>
  	</TableRow>
  </tbody>
</Table>`;
</script>

<svelte:head>
	<title>Svelte Components - Table</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Table
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/table"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>#</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Lastname</TableHead>
					<TableHead>Email</TableHead>
				</TableRow>
			</TableHeader>
			<tbody>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>John</TableCell>
					<TableCell>Doe</TableCell>
					<TableCell>john.doe@email.email</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>2</TableCell>
					<TableCell>Jane</TableCell>
					<TableCell>Doe</TableCell>
					<TableCell>jane.doe@email.email</TableCell>
				</TableRow>
			</tbody>
		</Table>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
