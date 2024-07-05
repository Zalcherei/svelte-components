<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Mask from '$lib/mask/mask.svelte';

	let code = `<Mask mask="heart" alt="..." src="https://picsum.photos/id/800/150/75" />
  <Mask mask="triangle" alt="..." src="https://picsum.photos/id/800/150/150" />`;
</script>

<svelte:head>
	<title>Svelte Components - Mask</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Mask mask="heart" alt="..." src="https://picsum.photos/id/800/150/100" />
	<Mask mask="triangle" alt="..." src="https://picsum.photos/id/800/150/150" />
</HighlightDisplay>
<Highlight {code} />
