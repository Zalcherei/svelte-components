<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Link from '$lib/link/link.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Link href="/">Link</Link>`;
</script>

<svelte:head>
	<title>Svelte Components - Link</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Link
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/link"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Link href={base}>Link</Link>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
