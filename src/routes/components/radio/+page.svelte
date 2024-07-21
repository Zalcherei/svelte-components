<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Radio from '$lib/radio/radio.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Radio name="radio" checked />
  <Radio name="radio" />
  <Radio name="radio" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radio</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Radio
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/radio"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<div>
			<Radio name="radio" checked />
			<Radio name="radio" />
			<Radio name="radio" />
		</div>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
