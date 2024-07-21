<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Badge from '$lib/badge/badge.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Badge>Badge</Badge>`;
</script>

<svelte:head>
	<title>Svelte Components - Badge</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Card
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/badge"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display>
		<Badge>Badge</Badge>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
