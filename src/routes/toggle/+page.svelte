<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toggle from '$lib/toggle/toggle.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Toggle id="toggle">Toggle me</Toggle>`;
</script>

<svelte:head>
	<title>Svelte Components - Toggle</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Toggle
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/toggle"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Toggle id="toggle">Toggle me</Toggle>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
