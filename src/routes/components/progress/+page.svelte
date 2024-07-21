<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Progress from '$lib/progress/progress.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Progress value="50"/>`;
</script>

<svelte:head>
	<title>Svelte Components - Progress</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Progress
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/progress"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Progress value="50" />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
