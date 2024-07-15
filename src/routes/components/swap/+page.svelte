<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import MenuIcon from '$lib/icons/menu.svelte';
	import XIcon from '$lib/icons/x.svelte';
	import Swap from '$lib/swap/swap.svelte';

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
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Swap>
		<XIcon slot="from" />
		<MenuIcon slot="to" />
	</Swap>
	<Swap>
		<Button slot="from" label="Button" />
		<Button size="icon" slot="to" icon={MenuIcon} />
	</Swap>
</HighlightDisplay>
<Highlight {code} />
