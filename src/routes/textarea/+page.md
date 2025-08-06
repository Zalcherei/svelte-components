<script>
  import Textarea from '$lib/textarea/textarea.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Textarea</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Textarea" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/textarea">
{#snippet display()}
<Textarea resize="resize-none" placeholder="What's on your mind?"></Textarea>
{/snippet}

```html
<Textarea resize="resize-none" placeholder="What's on your mind?"></Textarea>
```
</Mdsvex>
