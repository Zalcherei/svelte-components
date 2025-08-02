<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Menu from '$lib/menu/menu.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import MenuItem from '$lib/menu/menu-item.svelte';

	let code = `<Menu variant="col">
  <MenuItem href="{base}/menu">Item #1</MenuItem>
  <MenuItem href="{base}/menu">Item #2</MenuItem>
  <MenuItem href="{base}/menu">Item #3</MenuItem>
  <MenuItem href="{base}/menu">Item #4</MenuItem>
</Menu>`;
</script>

<svelte:head>
	<title>Svelte-Components - Menu</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Menu
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/menu"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Menu variant="col">
			<MenuItem href="{base}/menu">Item #1</MenuItem>
			<MenuItem href="{base}/menu">Item #2</MenuItem>
			<MenuItem href="{base}/menu">Item #3</MenuItem>
			<MenuItem href="{base}/menu">Item #4</MenuItem>
		</Menu>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
