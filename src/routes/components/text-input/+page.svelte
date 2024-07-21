<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import TextInput from '$lib/text-input/text-input.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<TextInput placeholder="What's on your mind?" />`;
</script>

<svelte:head>
	<title>Svelte Components - Text input</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Text input
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/text-input"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<TextInput placeholder="What's on your mind?" />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
