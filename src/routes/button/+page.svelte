<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';

	let code = `<Button variant="outlined" label="Button" />
  <Button variant="text" label="Button" />
  <Button label="Button" />
  <Button label="Button" prepend={true} icon={Home} class="gap-2" />
  <Button label="Button" append={true} icon={Home} class="gap-2" />
  <Button size="icon" icon={Home} />`;
</script>

<svelte:head>
	<title>Svelte-Components - Button</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Button
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/button"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay>
		<Button>Button</Button>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
