<script>
	import { base } from '$app/paths';
	import BottomNavigation from '$lib/bottom-navigation/bottom-navigation.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Link from '$lib/link/link.svelte';
	import BarChart from '$lib/icons/bar-chart.svelte';
	import HelpCircle from '$lib/icons/circle-help.svelte';
	import Home from '$lib/icons/house.svelte';

	let code = `<BottomNavigation>
    <Link
      class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200
      hover:text-white dark:hover:bg-neutral-700"
      href="/"
    >
      <Home />
    </Link>
    <Link
      class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200
      hover:text-white dark:hover:bg-neutral-700"
      href="/"
    >
      <HelpCircle />
    </Link>
    <Link
      class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200
      hover:text-white dark:hover:bg-neutral-700"
      href="/"
    >
      <BarChart />
    </Link>
  </BottomNavigation>`;
</script>

<svelte:head>
	<title>Svelte Components - Bottom navigation</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<BottomNavigation class="!relative">
		<Link
			class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200 hover:text-white dark:hover:bg-neutral-700"
			href={base}
		>
			<Home />
		</Link>
		<Link
			class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200 hover:text-white dark:hover:bg-neutral-700"
			href={base}
		>
			<HelpCircle />
		</Link>
		<Link
			class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200 hover:text-white dark:hover:bg-neutral-700"
			href={base}
		>
			<BarChart />
		</Link>
	</BottomNavigation>
</HighlightDisplay>
<Highlight {code} />
