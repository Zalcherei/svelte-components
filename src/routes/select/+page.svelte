<script>
	import Select from '$lib/select/select.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Select</title>
</svelte:head>

<div class="flex justify-center">
	<Select>
		<option selected>Selected</option>
		<option>Option</option>
		<option>Another</option>
		<option>Last One</option>
	</Select>
</div>
