<script>
	import { base } from '$app/paths';
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

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Breadcrumbs>
			<li><a class="mr-2 hover:underline" href={base}>Home</a></li>
			<li><a class="mr-2 hover:underline" href={base}>Project</a></li>
			<li>Edit Project</li>
		</Breadcrumbs>
	</div>
	<Highlight {code} />
</div>
