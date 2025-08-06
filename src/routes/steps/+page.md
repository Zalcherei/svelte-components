<script>
  import Step from '$lib/steps/step.svelte';
	import Steps from '$lib/steps/steps.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';

	let steps = [
		{ id: 1, title: 'Register', complete: true, last: false },
		{ id: 2, title: 'Choose plan', complete: false, last: false },
		{ id: 3, title: 'Purchase', complete: false, last: false },
		{ id: 4, title: 'Receive product', complete: false, last: true }
	];
</script>

<svelte:head>
	<title>Svelte Components - Steps</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Steps" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/steps">
{#snippet display()}
<Steps>
	{#each steps as { id, title, complete, last }, index (index)}
		<Step {title} {complete} {id} {last} />
	{/each}
</Steps>
{/snippet}

```html
<Steps>
	{#each steps as { id, title, complete, last }, index (index)}
		<Step {title} {complete} {id} {last} />
	{/each}
</Steps>
```
</Mdsvex>
