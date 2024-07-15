<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Indicator from '$lib/indicator/indicator.svelte';

	let code = `<button
    class="relative me-1 inline-flex h-10 min-w-10 items-center justify-center
    rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800
    dark:hover:bg-neutral-700"
  >
    Button
    <Indicator />
  </button>`;
</script>

<svelte:head>
	<title>Svelte Components - Indicator</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Button>
		Button
		<Indicator />
	</Button>
</HighlightDisplay>
<Highlight {code} />
