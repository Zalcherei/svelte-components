<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Accordion from '$lib/accordion/accordion.svelte';

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

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Accordion label="Accordion Item #1">
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
	</Accordion>
</HighlightDisplay>
<Highlight {code} />
