<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Stat from '$lib/stat/stat.svelte';

	let code = `<Stat title="Total Page Views" stat="89,900" subtitle="5% more than last month" />`;
</script>

<svelte:head>
	<title>Svelte Components - Stat</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Stat
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/stat"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Stat title="Total Page Views" stat="89,900" subtitle="5% more than last month" />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
