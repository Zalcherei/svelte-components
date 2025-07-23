<script lang="ts">
	import { base } from '$app/paths';
	import BottomNavigation from '$lib/bottom-navigation/bottom-navigation.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import BarChartIcon from '$lib/icons/bar-chart.svelte';
	import HelpCircleIcon from '$lib/icons/circle-help.svelte';
	import HomeIcon from '$lib/icons/house.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<BottomNavigation class="!relative border-b-0">
    <Button class="flex h-16 w-full items-center justify-center" href={base}>
   	  <HomeIcon />
    </Button>
    <Button class="flex h-16 w-full items-center justify-center" href={base}>
   	  <HelpCircleIcon />
    </Button>
    <Button class="flex h-16 w-full items-center justify-center" href={base}>
   	  <BarChartIcon />
    </Button>
  </BottomNavigation>`;
</script>

<svelte:head>
	<title>Svelte Components - Bottom navigation</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Bottom Navigation
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/bottom-navigation"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<BottomNavigation class="!relative border-b-0">
			<Button class="flex h-16 w-full items-center justify-center" href={base}>
				<HomeIcon />
			</Button>
			<Button class="flex h-16 w-full items-center justify-center" href={base}>
				<HelpCircleIcon />
			</Button>
			<Button class="flex h-16 w-full items-center justify-center" href={base}>
				<BarChartIcon />
			</Button>
		</BottomNavigation>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
