<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Radio from '$lib/radio/radio.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Radio name="radio" value="1" bind:group={selectedValue} />
  <Radio name="radio" value="2" bind:group={selectedValue} />
  <Radio name="radio" value="3" bind:group={selectedValue} />`;

	let selectedValue = $state('1');
</script>

<svelte:head>
	<title>Svelte Components - Radio</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Radio
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/radio"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Radio name="radio" value="1" bind:group={selectedValue} />
		<Radio name="radio" value="2" bind:group={selectedValue} />
		<Radio name="radio" value="3" bind:group={selectedValue} />
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
