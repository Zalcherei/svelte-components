<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Loading from '$lib/loading/loading.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Loading />`;
</script>

<svelte:head>
	<title>Svelte Components - Loading</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Loading
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/loading"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Loading />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
