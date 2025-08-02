<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Kbd from '$lib/kbd/kbd.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Kbd>Ctrl</Kbd>
<Kbd>+</Kbd>
<Kbd>Shift</Kbd>`;
</script>

<svelte:head>
	<title>Svelte Components - KBD</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		KBD
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/kbd"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<div class="flex">
			<Kbd>Ctrl</Kbd>
			<Kbd>+</Kbd>
			<Kbd>Shift</Kbd>
		</div>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
