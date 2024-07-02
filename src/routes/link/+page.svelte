<script>
	import { base } from '$app/paths';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Link from '$lib/link/link.svelte';

	let code = `<Link href="/">Link</Link>`;
</script>

<svelte:head>
	<title>Svelte Components - Link</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Link href={base}>Link</Link>
	</div>
	<Highlight {code} />
</div>
