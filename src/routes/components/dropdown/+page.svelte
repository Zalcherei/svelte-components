<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Dropdown from '$lib/dropdown/dropdown.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Dropdown label="Dropdown">
  	<Button variant="text" label="Item 1" href="/" />
  	<Button variant="text" label="Item 2" href="/" />
  	<Button variant="text" label="Item 3" href="/" />
  	<Button variant="text" label="Item 4" href="/" />
  </Dropdown>`;
</script>

<svelte:head>
	<title>Svelte Components - Dropdown</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Dropdown
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dropdown"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display>
		<Dropdown label="Dropdown">
			<Button variant="text" label="Item 1" href="{base}/" />
			<Button variant="text" label="Item 2" href="{base}/" />
			<Button variant="text" label="Item 3" href="{base}/" />
			<Button variant="text" label="Item 4" href="{base}/" />
		</Dropdown>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
