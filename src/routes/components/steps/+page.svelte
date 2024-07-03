<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Step from '$lib/steps/step.svelte';

	import Steps from '$lib/steps/steps.svelte';

	let steps = [
		{ id: 1, title: 'Register', complete: true, last: false },
		{ id: 2, title: 'Choose plan', complete: false, last: false },
		{ id: 3, title: 'Purchase', complete: false, last: false },
		{ id: 4, title: 'Receive product', complete: false, last: true }
	];

	let code = `let steps = [...];
  <Steps>
    {#each steps as { id, title, complete, last }}
      <Step {title} {complete} {id} {last} />
    {/each}
  </Steps>`;
</script>

<svelte:head>
	<title>Svelte Components - Steps</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Steps>
			{#each steps as { id, title, complete, last }}
				<Step {title} {complete} {id} {last} />
			{/each}
		</Steps>
	</div>
	<Highlight {code} />
</div>
