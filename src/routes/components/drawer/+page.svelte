<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Drawer from '$lib/drawer/drawer.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Drawer class="max-h-48">
  	<Button variant="text" label="Item 1" />
  	<Button variant="text" label="Item 2" />
  	<Button variant="text" label="Item 3" />
  	<Button variant="text" label="Item 4" />
  </Drawer>`;
</script>

<svelte:head>
	<title>Svelte-Components - Drawer</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Drawer
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/drawer"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Drawer class="max-h-48">
			<Button variant="text" label="Item 1" />
			<Button variant="text" label="Item 2" />
			<Button variant="text" label="Item 3" />
			<Button variant="text" label="Item 4" />
		</Drawer>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
