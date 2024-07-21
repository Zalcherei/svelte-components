<script lang="ts">
	import Artboard from '$lib/artboard/artboard.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Artboard height="96" width="64" />`;
</script>

<svelte:head>
	<title>Svelte Components - Artboard</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Artboard
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/artboard"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Artboard height="96" width="64" />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
