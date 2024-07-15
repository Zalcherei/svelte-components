<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
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

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Select>
		<option selected>Selected</option>
		<option>Option</option>
		<option>Another</option>
		<option>Last One</option>
	</Select>
</HighlightDisplay>
<Highlight {code} />
