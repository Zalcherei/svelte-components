<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Radio from '$lib/radio/radio.svelte';

	let code = `<Radio name="radio" checked />
  <Radio name="radio" />
  <Radio name="radio" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radio</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Radio name="radio" checked />
	<Radio name="radio" />
	<Radio name="radio" />
</HighlightDisplay>
<Highlight {code} />
