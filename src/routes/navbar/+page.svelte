<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Navbar>
		<a class="font-medium" href={base}>Svelte-Components</a>
		<div class="flex-1"></div>
		<Button>Learn</Button>
	</Navbar>
	<Navbar variant="shadow">
		<a class="font-medium" href={base}>Svelte-Components</a>
		<div class="flex-1"></div>
		<Button>Learn</Button>
	</Navbar>`;
</script>

<svelte:head>
	<title>Svelte-Components - Navbar</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Navbar
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/navbar"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Navbar>
			<a class="font-medium" href={base}>Svelte-Components</a>
			<div class="flex-1"></div>
			<Button>Learn</Button>
		</Navbar>
		<Navbar variant="shadow">
			<a class="font-medium" href={base}>Svelte-Components</a>
			<div class="flex-1"></div>
			<Button>Learn</Button>
		</Navbar>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
