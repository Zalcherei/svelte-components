<script>
  import Accordion from '$lib/accordion/accordion.svelte';
  import AccordionTrigger from '$lib/accordion/accordion-trigger.svelte';
	import AccordionContent from '$lib/accordion/accordion-content.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Accordion</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Accordion" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/accordion">
{#snippet display()}
<div class="w-full">
  <Accordion class="mb-1">
  	<AccordionTrigger>Accordion Item #1</AccordionTrigger>
  	<AccordionContent>
  		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
  	</AccordionContent>
  </Accordion>
  <Accordion class="mb-1">
  	<AccordionTrigger>Accordion Item #2</AccordionTrigger>
  	<AccordionContent>
  		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur quaerat at
  		necessitatibus quia. Est, eos! Similique, eum! Minus, velit.
  	</AccordionContent>
  </Accordion>
  <Accordion class="mb-1">
  	<AccordionTrigger>Accordion Item #3</AccordionTrigger>
  	<AccordionContent>
  		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum officiis ullam
  		ducimus, deserunt tenetur fugit molestiae voluptatibus aut iste, debitis earum, excepturi
  		quidem mollitia nam impedit adipisci accusantium incidunt.
  	</AccordionContent>
  </Accordion>
</div>
{/snippet}

```html
<Accordion class="mb-1">
  <AccordionTrigger>Accordion Item #1</AccordionTrigger>
  <AccordionContent>
  	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
  </AccordionContent>
</Accordion>
<Accordion class="mb-1">
  <AccordionTrigger>Accordion Item #2</AccordionTrigger>
  <AccordionContent>
  	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur quaerat at
  	necessitatibus quia. Est, eos! Similique, eum! Minus, velit.
  </AccordionContent>
</Accordion>
<Accordion class="mb-1">
  <AccordionTrigger>Accordion Item #3</AccordionTrigger>
  <AccordionContent>
  	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum officiis ullam
  	ducimus, deserunt tenetur fugit molestiae voluptatibus aut iste, debitis earum, excepturi
  	quidem mollitia nam impedit adipisci accusantium incidunt.
  </AccordionContent>
</Accordion>
```
</Mdsvex>
