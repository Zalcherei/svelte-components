<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Kbd from '$lib/kbd/kbd.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Kbd>Ctrl</Kbd>
  <Kbd>+</Kbd>
  <Kbd>Shift</Kbd>`;
</script>

<svelte:head>
	<title>Svelte Components - KBD</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		KBD
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/kbd"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<div class="flex">
			<Kbd>Ctrl</Kbd>
			<Kbd>+</Kbd>
			<Kbd>Shift</Kbd>
		</div>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
