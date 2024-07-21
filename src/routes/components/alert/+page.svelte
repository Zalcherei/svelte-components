<script lang="ts">
	import Alert from '$lib/alert/alert.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Alert>Alert</Alert>`;
</script>

<svelte:head>
	<title>Svelte Components - Alert</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Alert
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/alert"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Alert>Alert</Alert>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
