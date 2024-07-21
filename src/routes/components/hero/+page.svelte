<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Hero from '$lib/hero/hero.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Hero
    title="Welcome"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Delectus libero corrupti quia asperiores, quam nihil consequatur similique ab laboriosam,
    assumenda modi qui quis vero, dolor veniam maxime iure commodi alias!"
  >
    <Button>Get Started</Button>
  </Hero>`;
</script>

<svelte:head>
	<title>Svelte Components - Hero</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Hero
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/hero"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Hero
			title="Welcome"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus libero corrupti quia
			asperiores, quam nihil consequatur similique ab laboriosam, assumenda modi qui quis vero,
			dolor veniam maxime iure commodi alias!"
		>
			<Button>Get Started</Button>
		</Hero>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
