<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Stack from '$lib/stack/stack.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Stack>
  	<Button label="Button 1" />
  	<Button label="Button 2" />
  	<Button label="Button 3" />
  </Stack>`;
</script>

<svelte:head>
	<title>Svelte Components - Stack</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Stack
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/stack"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Stack>
			<Button label="Button 1" />
			<Button label="Button 2" />
			<Button label="Button 3" />
		</Stack>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
