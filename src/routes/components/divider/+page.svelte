<script lang="ts">
	import Divider from '$lib/divider/divider.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Divider />`;
</script>

<svelte:head>
	<title>Svelte Components - Divider</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Divider
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/divider"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Divider />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
