<script>
	import Accordion from '$lib/accordion/accordion.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Accordion title="Accordion Item #1">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
  </Accordion>
  <Accordion title="Accordion Item #2">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur quaerat at
    necessitatibus quia. Est, eos! Similique, eum! Minus, velit.
  </Accordion>`;
</script>

<svelte:head>
	<title>Svelte Components - Accordion</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<Accordion title="Accordion Item #1">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, ut.
	</Accordion>
	<Accordion title="Accordion Item #2">
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur quaerat at
		necessitatibus quia. Est, eos! Similique, eum! Minus, velit.
	</Accordion>
	<Highlight {code} />
</div>
