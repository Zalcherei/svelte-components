<script lang="ts">
	import { base } from '$app/paths';
	import BottomNavigation from '$lib/bottom-navigation/bottom-navigation.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import BarChartIcon from '$lib/icons/bar-chart.svelte';
	import HelpCircleIcon from '$lib/icons/circle-help.svelte';
	import HomeIcon from '$lib/icons/house.svelte';

	let code = `<BottomNavigation class="!relative border-b-0">
  	<Button
  		class="flex h-16 w-full items-center justify-center"
  		variant="text"
  		href={base}
  		icon={HomeIcon}
  	/>
  	<Button
  		class="flex h-16 w-full items-center justify-center"
  		variant="text"
  		href={base}
  		icon={HelpCircleIcon}
  	/>
  	<Button
  		class="flex h-16 w-full items-center justify-center"
  		variant="text"
  		href={base}
  		icon={BarChartIcon}
  	/>
  </BottomNavigation>`;
</script>

<svelte:head>
	<title>Svelte Components - Bottom navigation</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<BottomNavigation class="!relative border-b-0">
		<Button
			class="flex h-16 w-full items-center justify-center"
			variant="text"
			href={base}
			icon={HomeIcon}
		/>
		<Button
			class="flex h-16 w-full items-center justify-center"
			variant="text"
			href={base}
			icon={HelpCircleIcon}
		/>
		<Button
			class="flex h-16 w-full items-center justify-center"
			variant="text"
			href={base}
			icon={BarChartIcon}
		/>
	</BottomNavigation>
</HighlightDisplay>
<Highlight {code} />
