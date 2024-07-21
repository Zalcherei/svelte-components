<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Kbd from '$lib/kbd/kbd.svelte';

	let code = `<Kbd>Ctrl</Kbd>
  <Kbd>+</Kbd>
  <Kbd>Shift</Kbd>`;
</script>

<svelte:head>
	<title>Svelte Components - KBD</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		KBD
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/kbd"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<div class="flex">
			<Kbd>Ctrl</Kbd>
			<Kbd>+</Kbd>
			<Kbd>Shift</Kbd>
		</div>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
