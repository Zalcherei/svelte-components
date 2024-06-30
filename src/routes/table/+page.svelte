<svelte:head>
	<title>Svelte Components - Table</title>
</svelte:head>

<div class="flex justify-center">
	<table class="w-full overflow-hidden rounded-md">
		<thead>
			<tr class="h-10 bg-gray-200 dark:bg-neutral-800">
				<th class="min-w-8 px-4 text-start">#</th>
				<th class="min-w-max px-4 text-start">Name</th>
				<th class="min-w-max px-4 text-start">Lastname</th>
				<th class="min-w-max px-4 text-start">Email</th>
			</tr>
		</thead>
		<tbody>
			<tr class="h-10">
				<td class="min-w-8 px-4 text-start">1</td>
				<td class="min-w-max px-4 text-start">John</td>
				<td class="min-w-max px-4 text-start">Doe</td>
				<td class="min-w-max px-4 text-start">john.doe@email.email</td>
			</tr>
			<tr class="h-10">
				<td class="min-w-8 px-4 text-start">2</td>
				<td class="min-w-max px-4 text-start">Jane</td>
				<td class="min-w-max px-4 text-start">Doe</td>
				<td class="min-w-max px-4 text-start">jane.doe@email.email</td>
			</tr>
		</tbody>
	</table>
</div>
