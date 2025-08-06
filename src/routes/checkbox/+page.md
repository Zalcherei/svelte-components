<script>
  import Checkbox from '$lib/checkbox/checkbox.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Checkbox</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Checkbox" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/checkbox">
{#snippet display()}
<div class="flex items-center gap-2">
	<Checkbox id="remember_me" />
	<label for="remember_me">Remember me</label>
</div>
{/snippet}

```html
<div class="flex items-center gap-2">
	<Checkbox id="remember_me" />
	<label for="remember_me">Remember me</label>
</div>
```
</Mdsvex>
