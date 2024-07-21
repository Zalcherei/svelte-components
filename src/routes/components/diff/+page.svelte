<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Diff from '$lib/diff/diff.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Diff
    compare="https://picsum.photos/id/800/800/300"
    compared="https://picsum.photos/id/800/800/300"
  />`;
</script>

<svelte:head>
	<title>Svelte Components - Diff</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Diff
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/diff"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Diff
			compare="https://picsum.photos/id/800/800/300"
			compared="https://picsum.photos/id/800/800/300"
		/>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
