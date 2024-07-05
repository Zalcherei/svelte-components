<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';

	let code = `<Navbar>
    <a class="font-medium" href="/">Svelte-Components</a>
    <div class="flex-1"></div>
    <Button variant="text">Learn</Button>
  </Navbar>
  <Navbar variant="shadow">
    <a class="font-medium" href="/">Svelte-Components</a>
    <div class="flex-1"></div>
    <Button variant="text">Learn</Button>
  </Navbar>`;
</script>

<svelte:head>
	<title>Svelte-Components - Navbar</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Navbar>
		<a class="font-medium" href={base}>Svelte-Components</a>
		<div class="flex-1"></div>
		<Button variant="text">Learn</Button>
	</Navbar>
	<Navbar variant="shadow">
		<a class="font-medium" href={base}>Svelte-Components</a>
		<div class="flex-1"></div>
		<Button variant="text">Learn</Button>
	</Navbar>
</HighlightDisplay>
<Highlight {code} />
