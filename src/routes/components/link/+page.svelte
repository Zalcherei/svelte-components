<script lang="ts">
	import { base } from '$app/paths';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Link from '$lib/link/link.svelte';

	let code = `<Link href="/">Link</Link>`;
</script>

<svelte:head>
	<title>Svelte Components - Link</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<Link href={base}>Link</Link>
</HighlightDisplay>
<Highlight {code} />
