<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Range from '$lib/range/range.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Range />`;
</script>

<svelte:head>
	<title>Svelte Components - Range</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Range
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/range"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Range />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
