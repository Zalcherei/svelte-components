<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import RadialProgress from '$lib/radial-progress/radial-progress.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<RadialProgress progress={75} theme="light" />`;
</script>

<svelte:head>
	<title>Svelte Components - Radial progress</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Radial progress
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/radial-progress"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<RadialProgress progress={75} theme="light" />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
