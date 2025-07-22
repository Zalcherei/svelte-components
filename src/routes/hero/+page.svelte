<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Hero from '$lib/hero/hero.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';
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
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Hero
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/hero"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<Hero
			title="Welcome"
			description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus libero corrupti quia
			asperiores, quam nihil consequatur similique ab laboriosam, assumenda modi qui quis vero,
			dolor veniam maxime iure commodi alias!"
		>
			<Button>Get Started</Button>
		</Hero>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
