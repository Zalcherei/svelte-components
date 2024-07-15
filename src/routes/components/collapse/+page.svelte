<script lang="ts">
	import Collapse from '$lib/collapse/collapse.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
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

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Collapse title="Collapse">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
	</Collapse>
	<Collapse variant="shadow" title="Collapse">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
	</Collapse>
	<Collapse variant="outlined" title="Collapse">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
	</Collapse>
</HighlightDisplay>
<Highlight {code} />
