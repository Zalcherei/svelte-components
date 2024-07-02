<script>
	import BottomNavigation from '$lib/bottom-navigation/bottom-navigation.svelte';
	import Link from '$lib/link/link.svelte';
	import BarChart from 'lucide-svelte/icons/bar-chart';
	import HelpCircle from 'lucide-svelte/icons/circle-help';
	import Home from 'lucide-svelte/icons/house';
</script>

<svelte:head>
	<title>Svelte Components - Bottom navigation</title>
</svelte:head>

<div class="relative flex h-[calc(100vh-32px)] justify-center">
	<BottomNavigation>
		<Link
			class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200 hover:text-white dark:hover:bg-neutral-700"
			href="/"
		>
			<Home />
		</Link>
		<Link
			class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200 hover:text-white dark:hover:bg-neutral-700"
			href="/"
		>
			<HelpCircle />
		</Link>
		<Link
			class="flex h-16 w-full items-center justify-center transition hover:bg-gray-200 hover:text-white dark:hover:bg-neutral-700"
			href="/"
		>
			<BarChart />
		</Link>
	</BottomNavigation>
</div>
