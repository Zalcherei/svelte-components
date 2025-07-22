<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import DropdownMenuContent from '$lib/dropdown-menu/dropdown-menu-content.svelte';
	import DropdownMenuTrigger from '$lib/dropdown-menu/dropdown-menu-trigger.svelte';
	import DropdownMenu from '$lib/dropdown-menu/dropdown-menu.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';
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
	<title>Svelte Components - Dropdown Menu</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Dropdown Menu
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dropdown"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay>
		<DropdownMenu>
			<DropdownMenuTrigger>Dropdown</DropdownMenuTrigger>
			<DropdownMenuContent>
				<Button variant="text" href="{base}/dropdown-menu">Item 1</Button>
				<Button variant="text" href="{base}/dropdown-menu">Item 2</Button>
				<Button variant="text" href="{base}/dropdown-menu">Item 3</Button>
				<Button variant="text" href="{base}/dropdown-menu">Item 4</Button>
			</DropdownMenuContent>
		</DropdownMenu>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
