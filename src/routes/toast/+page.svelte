<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toast from '$lib/toast/toast.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Toast>Toast</Toast>`;
</script>

<svelte:head>
	<title>Svelte Components - Toast</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Toast
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/toast"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Toast class="!relative">Toast</Toast>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
