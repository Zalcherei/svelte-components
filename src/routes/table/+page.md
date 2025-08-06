<script>
  import Table from '$lib/table/table.svelte';
  import TableHeader from '$lib/table/table-header.svelte';
	import TableHead from '$lib/table/table-head.svelte';
	import TableRow from '$lib/table/table-row.svelte';
	import TableCell from '$lib/table/table-cell.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Table</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Table" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/table">
{#snippet display()}
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
{/snippet}

```html
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
```
</Mdsvex>
