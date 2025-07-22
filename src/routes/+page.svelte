<script>
	import { base } from '$app/paths';
	import { navigationUtils } from '$lib/navigationUtils';
	import Button from '$lib/button/button.svelte';
</script>

<svelte:head>
	<title>Svelte-Components - Components</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

{#each navigationUtils as item}
	<h3 class="my-4 text-3xl">{item.name}</h3>
	{#if item.children}
		<div class="grid grid-cols-5 gap-2">
			{#each item.children as child}
				<Button variant="text" aria-label={child.name} href="{base}/{child.href}">
					{child.name}
				</Button>
			{/each}
		</div>
	{/if}
{/each}
