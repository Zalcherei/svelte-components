<script>
	import Breadcrumbs from '$lib/breadcrumbs/breadcrumbs.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Breadcrumbs</title>
</svelte:head>

<div class="flex justify-center">
	<Breadcrumbs>
		<li><a class="mr-2 hover:underline" href="/">Home</a></li>
		<li><a class="mr-2 hover:underline" href="/">Project</a></li>
		<li>Edit Project</li>
	</Breadcrumbs>
</div>
