<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Mask from '$lib/mask/mask.svelte';

	let code = `<Mask mask="heart" alt="..." src="https://picsum.photos/id/800/150/75" />
  <Mask mask="triangle" alt="..." src="https://picsum.photos/id/800/150/150" />`;
</script>

<svelte:head>
	<title>Svelte Components - Mask</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Mask mask="heart" alt="..." src="https://picsum.photos/id/800/150/100" />
		<Mask mask="triangle" alt="..." src="https://picsum.photos/id/800/150/150" />
	</div>
	<Highlight {code} />
</div>
