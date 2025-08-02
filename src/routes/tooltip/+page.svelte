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

<Highlight>
	<HighlightTitle>
		Tooltip
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/tooltip"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<div class="flex gap-2">
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
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
