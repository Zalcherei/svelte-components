<script>
	import Countdown from '$lib/countdown/countdown.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Countdown timer={60000} />`;
</script>

<svelte:head>
	<title>Svelte Components - Countdown</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Countdown timer={60000} />
</HighlightDisplay>
<Highlight {code} />
