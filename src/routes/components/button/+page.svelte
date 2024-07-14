<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Home from '$lib/icons/house.svelte';

	let code = `<Button variant="outlined" label="Button" />
  <Button variant="text" label="Button" />
  <Button label="Button" />
  <Button label="Button" prepend={true} icon={Home} class="gap-2" />
  <Button label="Button" append={true} icon={Home} class="gap-2" />
  <Button size="icon" icon={Home} />`;
</script>

<svelte:head>
	<title>Svelte-Components - Button</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Button variant="outlined" label="Button" />
	<Button variant="text" label="Button" />
	<Button label="Button" />
	<Button label="Button" prepend={true} icon={Home} class="gap-2" />
	<Button label="Button" append={true} icon={Home} class="gap-2" />
	<Button size="icon" icon={Home} />
</HighlightDisplay>
<Highlight {code} />
