<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Drawer class="max-h-48">
  	<Button variant="text" label="Item 1" />
  	<Button variant="text" label="Item 2" />
  	<Button variant="text" label="Item 3" />
  	<Button variant="text" label="Item 4" />
  </Drawer>`;
</script>

<svelte:head>
	<title>Svelte-Components - Drawer</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Drawer
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/drawer"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Drawer class="max-h-48">
			<Button>Item #1</Button>
			<Button>Item #2</Button>
			<Button>Item #3</Button>
			<Button>Item #4</Button>
		</Drawer>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
