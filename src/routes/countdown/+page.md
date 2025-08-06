<script>
  import Countdown from '$lib/countdown/countdown.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Countdown</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Countdown" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/countdown">
{#snippet display()}
<Countdown timer={60000} />
{/snippet}

```html
<Countdown timer={60000} />
```
</Mdsvex>
