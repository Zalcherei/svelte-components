<script lang="ts">
	import { base } from '$app/paths';
	import Breadcrumbs from '$lib/breadcrumbs/breadcrumbs.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
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

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Breadcrumbs>
		<li><a class="mr-2 hover:underline" href={base}>Home</a></li>
		<li><a class="mr-2 hover:underline" href={base}>Project</a></li>
		<li>Edit Project</li>
	</Breadcrumbs>
</HighlightDisplay>
<Highlight {code} />
