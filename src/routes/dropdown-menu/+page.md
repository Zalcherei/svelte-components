<script>
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import DropdownMenu from '$lib/dropdown-menu/dropdown-menu.svelte';
	import DropdownMenuTrigger from '$lib/dropdown-menu/dropdown-menu-trigger.svelte';
	import DropdownMenuContent from '$lib/dropdown-menu/dropdown-menu-content.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Dropdown Menu</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Dropdown Menu" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dropdown-menu">
{#snippet display()}
<DropdownMenu>
	<DropdownMenuTrigger>Dropdown</DropdownMenuTrigger>
	<DropdownMenuContent>
		<Button href="{base}/dropdown-menu">Item 1</Button>
		<Button href="{base}/dropdown-menu">Item 2</Button>
		<Button href="{base}/dropdown-menu">Item 3</Button>
		<Button href="{base}/dropdown-menu">Item 4</Button>
	</DropdownMenuContent>
</DropdownMenu>
<div class="relative h-32"></div>
{/snippet}

```html
<Button>Button</Button>
```
</Mdsvex>
