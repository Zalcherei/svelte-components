<script>
  import { base } from '$app/paths';
  import Breadcrumbs from '$lib/breadcrumbs/breadcrumbs.svelte';
  import BreadcrumbsItem from '$lib/breadcrumbs/breadcrumbs-item.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Breadcrumbs</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Breadcrumbs" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/breadcrumbs">
{#snippet display()}
<Breadcrumbs>
	<BreadcrumbsItem href={base}>Home</BreadcrumbsItem>
	<BreadcrumbsItem href={base}>Project</BreadcrumbsItem>
	<BreadcrumbsItem>Edit Project</BreadcrumbsItem>
</Breadcrumbs>
{/snippet}

```html
<Breadcrumbs>
	<BreadcrumbsItem href={base}>Home</BreadcrumbsItem>
	<BreadcrumbsItem href={base}>Project</BreadcrumbsItem>
	<BreadcrumbsItem>Edit Project</BreadcrumbsItem>
</Breadcrumbs>
```
</Mdsvex>
