<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import RadialProgress from '$lib/radial-progress/radial-progress.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<RadialProgress progress={75} theme="light" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radial progress</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Radial progress
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/radial-progress"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<RadialProgress progress={75} theme="light" />
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
