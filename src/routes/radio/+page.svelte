<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Radio from '$lib/radio/radio.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Radio name="radio" checked />
  <Radio name="radio" />
  <Radio name="radio" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radio</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Radio
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/radio"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<div>
			<Radio name="radio" checked />
			<Radio name="radio" />
			<Radio name="radio" />
		</div>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
