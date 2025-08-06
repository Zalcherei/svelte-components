<script>
  import Radio from '$lib/radio/radio.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';

	let selectedValue = $state('1');
</script>

<svelte:head>
	<title>Svelte Components - Radio</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Radio" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/radio">
{#snippet display()}
<Radio name="radio" value="1" bind:group={selectedValue} />
<Radio name="radio" value="2" bind:group={selectedValue} />
<Radio name="radio" value="3" bind:group={selectedValue} />
{/snippet}

```html
<Radio name="radio" value="1" bind:group={selectedValue} />
<Radio name="radio" value="2" bind:group={selectedValue} />
<Radio name="radio" value="3" bind:group={selectedValue} />
```
</Mdsvex>
