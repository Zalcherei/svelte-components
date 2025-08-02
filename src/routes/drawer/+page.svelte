<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Drawer class="max-h-48 space-y-4 p-4" bind:open>
  <Button>Item #1</Button>
  <Button>Item #2</Button>
  <Button>Item #3</Button>
  <Button>Item #4</Button>
</Drawer>`;

	let open = $state(true);
</script>

<svelte:head>
	<title>Svelte-Components - Drawer</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Drawer
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/drawer"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Drawer class="max-h-48 space-y-4 p-4" bind:open>
			<Button>Item #1</Button>
			<Button>Item #2</Button>
			<Button>Item #3</Button>
			<Button>Item #4</Button>
		</Drawer>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
