<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Menu from '$lib/menu/menu.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Menu>
    <Button href="/">Item 1</Button>
    <Button href="/">Item 2</Button>
    <Button href="/">Item 3</Button>
    <Button href="/">Item 4</Button>
  </Menu>`;
</script>

<svelte:head>
	<title>Svelte-Components - Menu</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Menu
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/menu"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<Menu variant="col">
			<Button variant="text" href="{base}/">Item #1</Button>
			<Button variant="text" href="{base}/">Item #2</Button>
			<Button variant="text" href="{base}/">Item #3</Button>
			<Button variant="text" href="{base}/">Item #4</Button>
		</Menu>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
