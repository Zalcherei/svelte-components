<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Rating from '$lib/rating/rating.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Rating stars={5} />`;
</script>

<svelte:head>
	<title>Svelte Components - Rating</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Rating
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/rating"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<div class="flex">
			<Rating variant="text" stars={5} />
		</div>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
