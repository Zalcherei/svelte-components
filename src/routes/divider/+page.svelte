<script lang="ts">
	import Divider from '$lib/divider/divider.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Divider />`;
</script>

<svelte:head>
	<title>Svelte Components - Divider</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Divider
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/divider"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Divider />
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
