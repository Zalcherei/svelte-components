<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Select from '$lib/select/select.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Select>
    <option selected>Selected</option>
    <option>Option</option>
    <option>Another</option>
    <option>Last One</option>
  </Select>`;
</script>

<svelte:head>
	<title>Svelte Components - Select</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Select
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/select"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<Select>
			<option selected>Selected</option>
			<option>Option</option>
			<option>Another</option>
			<option>Last One</option>
		</Select>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
