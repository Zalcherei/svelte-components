<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Select from '$lib/select/select.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

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

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Select
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/select"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Select>
			<option selected>Selected</option>
			<option>Option</option>
			<option>Another</option>
			<option>Last One</option>
		</Select>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
