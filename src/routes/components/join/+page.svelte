<script>
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Indicator from '$lib/indicator/indicator.svelte';
	import Join from '$lib/join/join.svelte';

	let code = `<Join direction="horizontal">
    <Button>Button</Button>
    <Button>Button</Button>
    <Button class="relative">
      Button
      <Indicator />
    </Button>
  </Join>
  <Join direction="vertical">
    <Button class="relative">
      Button
      <Indicator />
    </Button>
    <Button>Button</Button>
    <Button>Button</Button>
  </Join>`;
</script>

<svelte:head>
	<title>Svelte Components - Join</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Join direction="horizontal">
		<Button>Button</Button>
		<Button>Button</Button>
		<Button class="relative">
			Button
			<Indicator />
		</Button>
	</Join>
	<Join direction="vertical">
		<Button class="relative">
			Button
			<Indicator />
		</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</Join>
</HighlightDisplay>
<Highlight {code} />
