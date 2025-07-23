<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Breadcrumbs from '$lib/breadcrumbs/breadcrumbs.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import BreadcrumbsItem from '$lib/breadcrumbs/breadcrumbs-item.svelte';

	let code = `<Breadcrumbs>
    <BreadcrumbsItem href={base}>Home</BreadcrumbsItem>
    <BreadcrumbsItem href={base}>Project</BreadcrumbsItem>
    <BreadcrumbsItem>Edit Project</BreadcrumbsItem>
  </Breadcrumbs>`;
</script>

<svelte:head>
	<title>Svelte Components - Breadcrumbs</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		BreadCrumbs
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/breadcrumbs"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Breadcrumbs>
			<BreadcrumbsItem href={base}>Home</BreadcrumbsItem>
			<BreadcrumbsItem href={base}>Project</BreadcrumbsItem>
			<BreadcrumbsItem>Edit Project</BreadcrumbsItem>
		</Breadcrumbs>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
