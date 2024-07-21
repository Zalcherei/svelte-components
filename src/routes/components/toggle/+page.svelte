<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toggle from '$lib/toggle/toggle.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Toggle id="toggle">Toggle me</Toggle>`;
</script>

<svelte:head>
	<title>Svelte Components - Toggle</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Toggle
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/toggle"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Toggle id="toggle">Toggle me</Toggle>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
