<script>
	import BarChart from 'lucide-svelte/icons/bar-chart';
	import HelpCircle from 'lucide-svelte/icons/circle-help';
	import Home from 'lucide-svelte/icons/house';
</script>

<svelte:head>
	<title>Svelte Components - Bottom navigation</title>
</svelte:head>

<div class="flex justify-center">
	<nav class="flex h-16 w-full items-center justify-center bg-white dark:bg-neutral-800">
		<a
			class="flex h-16 w-full min-w-16 items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-700"
			href="/"
		>
			<Home />
		</a>
		<a
			class="flex h-16 w-full min-w-16 items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-700"
			href="/"
		>
			<HelpCircle />
		</a>
		<a
			class="flex h-16 w-full min-w-16 items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-700"
			href="/"
		>
			<BarChart />
		</a>
	</nav>
</div>
