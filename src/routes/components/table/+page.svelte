<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import TableHeader from '$lib/table/table-header.svelte';
	import TableRow from '$lib/table/table-row.svelte';
	import Table from '$lib/table/table.svelte';

	let code = `<Table>
    <TableHeader>
      <th class="min-w-8 px-4 text-start">#</th>
      <th class="min-w-max px-4 text-start">Name</th>
      <th class="min-w-max px-4 text-start">Lastname</th>
      <th class="min-w-max px-4 text-start">Email</th>
    </TableHeader>
    <tbody>
      <TableRow>
        <td class="min-w-8 px-4 text-start">1</td>
        <td class="min-w-max px-4 text-start">John</td>
        <td class="min-w-max px-4 text-start">Doe</td>
        <td class="min-w-max px-4 text-start">john.doe@email.email</td>
      </TableRow>
      <TableRow>
        <td class="min-w-8 px-4 text-start">2</td>
        <td class="min-w-max px-4 text-start">Jane</td>
        <td class="min-w-max px-4 text-start">Doe</td>
        <td class="min-w-max px-4 text-start">jane.doe@email.email</td>
      </TableRow>
    </tbody>
  </Table>`;
</script>

<svelte:head>
	<title>Svelte Components - Table</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Table>
		<TableHeader>
			<th class="min-w-8 px-4 text-start">#</th>
			<th class="min-w-max px-4 text-start">Name</th>
			<th class="min-w-max px-4 text-start">Lastname</th>
			<th class="min-w-max px-4 text-start">Email</th>
		</TableHeader>
		<tbody>
			<TableRow>
				<td class="min-w-8 px-4 text-start">1</td>
				<td class="min-w-max px-4 text-start">John</td>
				<td class="min-w-max px-4 text-start">Doe</td>
				<td class="min-w-max px-4 text-start">john.doe@email.email</td>
			</TableRow>
			<TableRow>
				<td class="min-w-8 px-4 text-start">2</td>
				<td class="min-w-max px-4 text-start">Jane</td>
				<td class="min-w-max px-4 text-start">Doe</td>
				<td class="min-w-max px-4 text-start">jane.doe@email.email</td>
			</TableRow>
		</tbody>
	</Table>
</HighlightDisplay>
<Highlight {code} />
