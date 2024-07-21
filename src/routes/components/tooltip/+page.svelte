<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Tooltip from '$lib/tooltip/tooltip.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

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
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Tooltip
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/tooltip"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Button label="Left" class="group">
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
		</Button>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
