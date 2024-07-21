<script lang="ts">
	import { base } from '$app/paths';
	import BottomNavigation from '$lib/bottom-navigation/bottom-navigation.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import BarChartIcon from '$lib/icons/bar-chart.svelte';
	import HelpCircleIcon from '$lib/icons/circle-help.svelte';
	import HomeIcon from '$lib/icons/house.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

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

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Bottom Navigation
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/bottom-navigation"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
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
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
