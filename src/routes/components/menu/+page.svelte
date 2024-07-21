<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Menu from '$lib/menu/menu.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Menu>
    <Button href="/">Item 1</Button>
    <Button href="/">Item 2</Button>
    <Button href="/">Item 3</Button>
    <Button href="/">Item 4</Button>
  </Menu>`;
</script>

<svelte:head>
	<title>Svelte-Components - Menu</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Menu
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/menu"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Menu variant="col">
			<Button variant="text" label="Item 1" href="{base}/" />
			<Button variant="text" label="Item 2" href="{base}/" />
			<Button variant="text" label="Item 3" href="{base}/" />
			<Button variant="text" label="Item 4" href="{base}/" />
		</Menu>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
