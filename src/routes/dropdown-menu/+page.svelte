<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import DropdownMenuContent from '$lib/dropdown-menu/dropdown-menu-content.svelte';
	import DropdownMenuTrigger from '$lib/dropdown-menu/dropdown-menu-trigger.svelte';
	import DropdownMenu from '$lib/dropdown-menu/dropdown-menu.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<DropdownMenu>
  <DropdownMenuTrigger>Dropdown</DropdownMenuTrigger>
  <DropdownMenuContent>
  	<Button href="{base}/dropdown-menu">Item 1</Button>
  	<Button href="{base}/dropdown-menu">Item 2</Button>
  	<Button href="{base}/dropdown-menu">Item 3</Button>
  	<Button href="{base}/dropdown-menu">Item 4</Button>
  </DropdownMenuContent>
</DropdownMenu>`;
</script>

<svelte:head>
	<title>Svelte Components - Dropdown Menu</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Dropdown Menu
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dropdown"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<DropdownMenu>
			<DropdownMenuTrigger>Dropdown</DropdownMenuTrigger>
			<DropdownMenuContent>
				<Button href="{base}/dropdown-menu">Item 1</Button>
				<Button href="{base}/dropdown-menu">Item 2</Button>
				<Button href="{base}/dropdown-menu">Item 3</Button>
				<Button href="{base}/dropdown-menu">Item 4</Button>
			</DropdownMenuContent>
		</DropdownMenu>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
