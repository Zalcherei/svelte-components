<script>
  import Select from '$lib/select/select.svelte';
  import SelectTrigger from '$lib/select/select-trigger.svelte';
	import SelectContent from '$lib/select/select-content.svelte';
	import SelectOption from '$lib/select/select-option.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';

	let selectedValue = null;
</script>

<svelte:head>
	<title>Svelte Components - Select</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Select" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/select">
{#snippet display()}
<Select bind:value={selectedValue}>
	<SelectTrigger />
	<SelectContent>
		<SelectOption value="github">GitHub</SelectOption>
		<SelectOption value="instagram">Instagram</SelectOption>
		<SelectOption value="facebook">Facebook</SelectOption>
		<SelectOption value="linkedin">LinkedIn</SelectOption>
		<SelectOption value="twitter">Twitter</SelectOption>
		<SelectOption value="reddit">Reddit</SelectOption>
		<SelectOption data-value="clear">Clear selection</SelectOption>
	</SelectContent>
</Select>
{/snippet}

```html
<Select bind:value={selectedValue}>
	<SelectTrigger />
	<SelectContent>
		<SelectOption value="github">GitHub</SelectOption>
		<SelectOption value="instagram">Instagram</SelectOption>
		<SelectOption value="facebook">Facebook</SelectOption>
		<SelectOption value="linkedin">LinkedIn</SelectOption>
		<SelectOption value="twitter">Twitter</SelectOption>
		<SelectOption value="reddit">Reddit</SelectOption>
		<SelectOption data-value="clear">Clear selection</SelectOption>
	</SelectContent>
</Select>
```
</Mdsvex>
