<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Tooltip from '$lib/tooltip/tooltip.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Button label="Left" class="group">
    <Tooltip align="left">Left tooltip</Tooltip>
  </Button>
  <Button label="Top" class="group">
    <Tooltip align="top">Top tooltip</Tooltip>
  </Button>
  <Button label="Bottom" class="group">
    <Tooltip align="bottom">Bottom tooltip</Tooltip>
  </Button>
  <Button label="Right" class="group">
    <Tooltip align="right">Right tooltip</Tooltip>
  </Button>`;
</script>

<svelte:head>
	<title>Svelte Components - Tooltip</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Tooltip
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/tooltip"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Button class="group">
			Left
			<Tooltip align="left">Left tooltip</Tooltip>
		</Button>
		<Button class="group">
			Top
			<Tooltip align="top">Top tooltip</Tooltip>
		</Button>
		<Button class="group">
			Bottom
			<Tooltip align="bottom">Bottom tooltip</Tooltip>
		</Button>
		<Button class="group">
			Right
			<Tooltip align="right">Right tooltip</Tooltip>
		</Button>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
