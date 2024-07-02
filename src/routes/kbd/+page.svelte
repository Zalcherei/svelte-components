<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Kbd from '$lib/kbd/kbd.svelte';

	let code = `<Kbd>Ctrl</Kbd>
  <Kbd>+</Kbd>
  <Kbd>Shift</Kbd>`;
</script>

<svelte:head>
	<title>Svelte Components - KBD</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Kbd>Ctrl</Kbd>
		<Kbd>+</Kbd>
		<Kbd>Shift</Kbd>
	</div>
	<Highlight {code} />
</div>
