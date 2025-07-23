<script lang="ts">
	import FileInput from '$lib/file-input/file-input.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<FileInput />`;
</script>

<svelte:head>
	<title>Svelte Components - File input</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		File input
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/file-input"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<FileInput />
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
