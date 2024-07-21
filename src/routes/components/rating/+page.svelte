<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Rating from '$lib/rating/rating.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Rating stars={5} />`;
</script>

<svelte:head>
	<title>Svelte Components - Rating</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Rating
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/rating"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<div class="flex">
			<Rating variant="text" stars={5} />
		</div>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
