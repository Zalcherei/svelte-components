<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Checkbox from '$lib/checkbox/checkbox.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<div class="flex items-center gap-2">
  <Checkbox id="remember_me" />
  <label for="remember_me">Remember me</label>
</div>`;
</script>

<svelte:head>
	<title>Svelte Components - Checkbox</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Checkbox
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/checkbox"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<div class="flex items-center gap-2">
			<Checkbox id="remember_me" />
			<label for="remember_me">Remember me</label>
		</div>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
