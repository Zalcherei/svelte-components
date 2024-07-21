<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Breadcrumbs from '$lib/breadcrumbs/breadcrumbs.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Breadcrumbs>
    <li><a class="mr-2 hover:underline" href="/">Home</a></li>
    <li><a class="mr-2 hover:underline" href="/">Project</a></li>
    <li>Edit Project</li>
  </Breadcrumbs>`;
</script>

<svelte:head>
	<title>Svelte Components - Breadcrumbs</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		BreadCrumbs
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/breadcrumbs"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Breadcrumbs>
			<li><a class="mr-2 hover:underline" href={base}>Home</a></li>
			<li><a class="mr-2 hover:underline" href={base}>Project</a></li>
			<li>Edit Project</li>
		</Breadcrumbs>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
