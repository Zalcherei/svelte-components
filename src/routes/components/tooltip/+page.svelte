<script>
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Tooltip from '$lib/tooltip/tooltip.svelte';

	let code = `<Button class="group relative">
    Left
    <Tooltip align="left">Left tooltip</Tooltip>
  </Button>
  <Button class="group relative">
    Top
    <Tooltip align="top">Top tooltip</Tooltip>
  </Button>
  <Button class="group relative">
    Bottom
    <Tooltip align="bottom">Bottom tooltip</Tooltip>
  </Button>
  <Button class="group relative">
    Right
    <Tooltip align="right">Right tooltip</Tooltip>
  </Button>`;
</script>

<svelte:head>
	<title>Svelte Components - Tooltip</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Button class="group relative">
		Left
		<Tooltip align="left">Left tooltip</Tooltip>
	</Button>
	<Button class="group relative">
		Top
		<Tooltip align="top">Top tooltip</Tooltip>
	</Button>
	<Button class="group relative">
		Bottom
		<Tooltip align="bottom">Bottom tooltip</Tooltip>
	</Button>
	<Button class="group relative">
		Right
		<Tooltip align="right">Right tooltip</Tooltip>
	</Button>
</HighlightDisplay>
<Highlight {code} />
