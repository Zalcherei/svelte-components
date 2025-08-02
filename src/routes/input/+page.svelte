<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Input from '$lib/input/input.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Input type="text" placeholder="What's on your mind?" />`;
</script>

<svelte:head>
	<title>Svelte Components - Input</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Input
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/text-input"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Input type="text" placeholder="What's on your mind?" />
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
