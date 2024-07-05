<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';

	let swap = false;

	const handleAction = () => {
		swap = !swap;
	};

	let code = `<Button size="icon" on:click={handleAction}>
    {#if swap}
      <X />
    {:else}
      <Menu />
    {/if}
  </Button>`;
</script>

<svelte:head>
	<title>Svelte Components - Swap</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Button size="icon" on:click={handleAction}>
		{#if swap}
			<X />
		{:else}
			<Menu />
		{/if}
	</Button>
</HighlightDisplay>
<Highlight {code} />
