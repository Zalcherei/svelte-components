<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Checkbox from '$lib/checkbox/checkbox.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Checkbox>Checkbox</Checkbox>`;
</script>

<svelte:head>
	<title>Svelte Components - Checkbox</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Checkbox
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/checkbox"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<Checkbox>Checkbox</Checkbox>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
