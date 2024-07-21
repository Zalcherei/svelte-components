<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Skeleton from '$lib/skeleton/skeleton.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Skeleton />`;
</script>

<svelte:head>
	<title>Svelte Components - Skeleton</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Skeleton
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/skeleton"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Skeleton />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
