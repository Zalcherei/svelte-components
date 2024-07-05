<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Home from 'lucide-svelte/icons/house';

	let code = `<Button variant="outlined">Button</Button>
  <Button variant="text">Button</Button>
  <Button>Button</Button>
  <Button>
    <Home class="mr-2 h-5 w-5" />
    Button
  </Button>
  <Button>
    Button
    <Home class="ml-2 h-5 w-5" />
  </Button>
  <Button size="icon">
    <Home class="h-5 w-5" />
  </Button>`;
</script>

<svelte:head>
	<title>Svelte-Components - Button</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Button variant="outlined">Button</Button>
	<Button variant="text">Button</Button>
	<Button>Button</Button>
	<Button>
		<Home class="mr-2 h-5 w-5" />
		Button
	</Button>
	<Button>
		Button
		<Home class="ml-2 h-5 w-5" />
	</Button>
	<Button size="icon">
		<Home class="h-5 w-5" />
	</Button>
</HighlightDisplay>
<Highlight {code} />
