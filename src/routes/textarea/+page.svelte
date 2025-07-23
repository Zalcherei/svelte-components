<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Textarea from '$lib/textarea/textarea.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Textarea resize="resize/x/y/resize-none" placeholder="What's on your mind?"></Textarea>`;
</script>

<svelte:head>
	<title>Svelte Components - Textarea</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Textarea
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/textarea"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Textarea resize="resize-none" placeholder="What's on your mind?"></Textarea>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
