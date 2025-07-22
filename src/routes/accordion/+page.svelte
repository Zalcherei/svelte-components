<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Accordion from '$lib/accordion/accordion.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';
	import AccordionTrigger from '$lib/accordion/accordion-trigger.svelte';
	import AccordionContent from '$lib/accordion/accordion-content.svelte';

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
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Accordion
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/accordion"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay>
		<Accordion>
			<AccordionTrigger>Accordion Item #1</AccordionTrigger>
			<AccordionContent>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
			</AccordionContent>
		</Accordion>
		<Accordion variant="shadow">
			<AccordionTrigger>Accordion Item #2</AccordionTrigger>
			<AccordionContent>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur quaerat at
				necessitatibus quia. Est, eos! Similique, eum! Minus, velit.
			</AccordionContent>
		</Accordion>
		<Accordion variant="outlined">
			<AccordionTrigger>Accordion Item #3</AccordionTrigger>
			<AccordionContent>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum officiis ullam
				ducimus, deserunt tenetur fugit molestiae voluptatibus aut iste, debitis earum, excepturi
				quidem mollitia nam impedit adipisci accusantium incidunt.
			</AccordionContent>
		</Accordion>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
