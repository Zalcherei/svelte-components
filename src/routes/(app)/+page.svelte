<script>
	import { base } from '$app/paths';
	import Hero from '$lib/hero/hero.svelte';
	import Link from '$lib/link/link.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Home</title>
</svelte:head>

<Hero title="Svelte-components" description="Svelte components coupled with tailwindcss">
	<Link
		class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 hover:text-white hover:no-underline dark:bg-neutral-800 dark:hover:bg-neutral-700"
		href="{base}/components">Get Started</Link
	>
</Hero>
