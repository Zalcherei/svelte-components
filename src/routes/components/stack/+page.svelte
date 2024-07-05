<script>
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Stack from '$lib/stack/stack.svelte';

	let code = `<Stack>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </Stack>`;
</script>

<svelte:head>
	<title>Svelte Components - Stack</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Stack>
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</Stack>
</HighlightDisplay>
<Highlight {code} />
