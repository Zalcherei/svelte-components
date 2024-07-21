<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Accordion from '$lib/accordion/accordion.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Accordion label="Accordion Item #1">
  	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
  </Accordion>
  <Accordion variant="shadow" label="Accordion Item #2">
  	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur quaerat at
  	necessitatibus quia. Est, eos! Similique, eum! Minus, velit.
  </Accordion>
  <Accordion variant="outlined" label="Accordion Item #3">
  	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum officiis ullam
  	ducimus, deserunt tenetur fugit molestiae voluptatibus aut iste, debitis earum, excepturi quidem
  	mollitia nam impedit adipisci accusantium incidunt.
  </Accordion>`;
</script>

<svelte:head>
	<title>Svelte Components - Accordion</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Accordion
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/accordion"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display>
		<div class="w-full p-4">
			<Accordion label="Accordion Item #1">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
			</Accordion>
			<Accordion variant="shadow" label="Accordion Item #2">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur quaerat at
				necessitatibus quia. Est, eos! Similique, eum! Minus, velit.
			</Accordion>
			<Accordion variant="outlined" label="Accordion Item #3">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum officiis ullam
				ducimus, deserunt tenetur fugit molestiae voluptatibus aut iste, debitis earum, excepturi
				quidem mollitia nam impedit adipisci accusantium incidunt.
			</Accordion>
		</div>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
