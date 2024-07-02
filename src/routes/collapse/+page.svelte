<script>
	import Collapse from '$lib/collapse/collapse.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Collapse title="Collapse">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
  </Collapse>`;
</script>

<svelte:head>
	<title>Svelte Components - Collapse</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<Collapse title="Collapse">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
	</Collapse>
	<Highlight {code} />
</div>
