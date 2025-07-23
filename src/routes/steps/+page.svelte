<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Step from '$lib/steps/step.svelte';
	import Steps from '$lib/steps/steps.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

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
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Steps
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/steps"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Steps>
			{#each steps as { id, title, complete, last }}
				<Step {title} {complete} {id} {last} />
			{/each}
		</Steps>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
