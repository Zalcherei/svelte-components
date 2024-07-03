<script>
	import Button from '$lib/button/button.svelte';
	import Hero from '$lib/hero/hero.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

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

<div class="relative flex flex-col justify-center">
	<Hero
		title="Welcome"
		description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus libero corrupti quia
			asperiores, quam nihil consequatur similique ab laboriosam, assumenda modi qui quis vero,
			dolor veniam maxime iure commodi alias!"
	>
		<Button>Get Started</Button>
	</Hero>
	<Highlight {code} />
</div>
