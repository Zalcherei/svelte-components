<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Step from '$lib/steps/step.svelte';

	import Steps from '$lib/steps/steps.svelte';

	let steps = [
		{ id: 1, title: 'Register', complete: true, last: false },
		{ id: 2, title: 'Choose plan', complete: false, last: false },
		{ id: 3, title: 'Purchase', complete: false, last: false },
		{ id: 4, title: 'Receive product', complete: false, last: true }
	];

	let code = `<Steps>
    {#each steps as { id, title, complete, last }}
      <Step {title} {complete} {id} {last} />
    {/each}
  </Steps>`;
</script>

<svelte:head>
	<title>Svelte Components - Steps</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Steps>
		{#each steps as { id, title, complete, last }}
			<Step {title} {complete} {id} {last} />
		{/each}
	</Steps>
</HighlightDisplay>
<Highlight {code} />
