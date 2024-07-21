<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Collapse from '$lib/collapse/collapse.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Collapse title="Collapse">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
  </Collapse>
  <Collapse variant="shadow" title="Collapse">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
  </Collapse>
  <Collapse variant="outlined" title="Collapse">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
  </Collapse>`;
</script>

<svelte:head>
	<title>Svelte Components - Collapse</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Collapse
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/collapse"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Collapse title="Collapse">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
		</Collapse>
		<Collapse variant="shadow" title="Collapse">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
		</Collapse>
		<Collapse variant="outlined" title="Collapse">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
		</Collapse>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
