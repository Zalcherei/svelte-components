<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import Swap from '$lib/swap/swap.svelte';
	import MenuIcon from '$lib/icons/menu.svelte';
	import XIcon from '$lib/icons/x.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Swap>
    <X slot="from" />
    <Menu slot="to" />
  </Swap>
  <Swap>
    <Button slot="from">Button</Button>
    <Button slot="to">
      <Menu />
    </Button>
  </Swap>`;
</script>

<svelte:head>
	<title>Svelte Components - Swap</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Swap
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/swap"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay>
		<Swap>
			<XIcon slot="from" />
			<MenuIcon slot="to" />
		</Swap>
		<Swap>
			<Button slot="from">Button</Button>
			<Button size="icon" slot="to">
				<MenuIcon />
			</Button>
		</Swap>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
