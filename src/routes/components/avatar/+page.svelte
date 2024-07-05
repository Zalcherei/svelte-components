<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Avatar from '$lib/avatar/avatar.svelte';

	let code = `<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
  <Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
  <Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />`;
</script>

<svelte:head>
	<title>Svelte Components - Avatar</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
	<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
	<Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />
</HighlightDisplay>
<Highlight {code} />
