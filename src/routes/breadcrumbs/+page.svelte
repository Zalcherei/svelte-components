<svelte:head>
	<title>Svelte Components - Breadcrumbs</title>
</svelte:head>

<div class="flex justify-center">
	<div>
		<ul class="flex [&>*:last-child]:after:content-[''] [&>*]:me-2 [&>*]:after:content-['>']">
			<li><a class="mr-2 hover:underline" href="/">Home</a></li>
			<li><a class="mr-2 hover:underline" href="/">Project</a></li>
			<li>Edit Project</li>
		</ul>
	</div>
</div>
