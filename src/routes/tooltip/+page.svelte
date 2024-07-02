<script>
	import Button from '$lib/button/button.svelte';
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

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
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
	</div>
	<Highlight {code} />
</div>
