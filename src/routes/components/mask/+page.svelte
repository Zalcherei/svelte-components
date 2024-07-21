<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Mask from '$lib/mask/mask.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Mask mask="heart" alt="..." src="https://picsum.photos/id/800/150/75" />
  <Mask mask="triangle" alt="..." src="https://picsum.photos/id/800/150/150" />`;
</script>

<svelte:head>
	<title>Svelte Components - Mask</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Mask
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/mask"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Mask mask="heart" alt="..." src="https://picsum.photos/id/800/150/100" />
		<Mask mask="triangle" alt="..." src="https://picsum.photos/id/800/150/150" />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
