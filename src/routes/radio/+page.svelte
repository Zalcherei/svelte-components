<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Radio from '$lib/radio/radio.svelte';

	let code = `<Radio name="radio" checked />
  <Radio name="radio" />
  <Radio name="radio" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radio</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Radio name="radio" checked />
		<Radio name="radio" />
		<Radio name="radio" />
	</div>
	<Highlight {code} />
</div>
