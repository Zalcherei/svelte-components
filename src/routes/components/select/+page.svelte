<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Select from '$lib/select/select.svelte';

	let code = `<Select>
    <option selected>Selected</option>
    <option>Option</option>
    <option>Another</option>
    <option>Last One</option>
  </Select>`;
</script>

<svelte:head>
	<title>Svelte Components - Select</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Select>
			<option selected>Selected</option>
			<option>Option</option>
			<option>Another</option>
			<option>Last One</option>
		</Select>
	</div>
	<Highlight {code} />
</div>
