<script>
	import Avatar from '$lib/avatar/avatar.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
  <Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
  <Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />`;
</script>

<svelte:head>
	<title>Svelte Components - Avatar</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex w-full items-center justify-center">
		<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
		<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
		<Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />
	</div>
	<Highlight {code} />
</div>
