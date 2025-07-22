<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Breadcrumbs from '$lib/breadcrumbs/breadcrumbs.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Breadcrumbs>
    <li><a class="mr-2 hover:underline" href="/">Home</a></li>
    <li><a class="mr-2 hover:underline" href="/">Project</a></li>
    <li>Edit Project</li>
  </Breadcrumbs>`;
</script>

<svelte:head>
	<title>Svelte Components - Breadcrumbs</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		BreadCrumbs
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/breadcrumbs"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<Breadcrumbs>
			<li><a class="mr-2 hover:underline" href={base}>Home</a></li>
			<li><a class="mr-2 hover:underline" href={base}>Project</a></li>
			<li>Edit Project</li>
		</Breadcrumbs>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
