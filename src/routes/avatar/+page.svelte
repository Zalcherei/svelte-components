<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Avatar from '$lib/avatar/avatar.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
  <Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
  <Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />`;
</script>

<svelte:head>
	<title>Svelte Components - Avatar</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Avatar
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/avatar"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<div class="flex items-center gap-2">
			<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
			<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
			<Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />
		</div>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
