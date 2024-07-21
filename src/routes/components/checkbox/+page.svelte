<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Checkbox from '$lib/checkbox/checkbox.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Checkbox>Checkbox</Checkbox>`;
</script>

<svelte:head>
	<title>Svelte Components - Checkbox</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Checkbox
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/checkbox"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Checkbox>Checkbox</Checkbox>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
