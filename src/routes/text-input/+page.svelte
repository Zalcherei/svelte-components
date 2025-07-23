<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import TextInput from '$lib/text-input/text-input.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<TextInput placeholder="What's on your mind?" />`;
</script>

<svelte:head>
	<title>Svelte Components - Text input</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Text input
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/text-input"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<TextInput placeholder="What's on your mind?" />
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
