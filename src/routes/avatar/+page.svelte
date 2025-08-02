<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Avatar from '$lib/avatar/avatar.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Avatar alt="large" src="https://picsum.photos/48/48" />`;
</script>

<svelte:head>
	<title>Svelte Components - Avatar</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Avatar
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/avatar"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<div class="flex items-center gap-2">
			<Avatar alt="large" src="https://picsum.photos/48/48" />
		</div>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
