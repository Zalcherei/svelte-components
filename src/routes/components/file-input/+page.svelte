<script lang="ts">
	import FileInput from '$lib/file-input/file-input.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<FileInput />`;
</script>

<svelte:head>
	<title>Svelte Components - File input</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		File input
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/file-input"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<FileInput />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
