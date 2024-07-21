<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import ThemeController from '$lib/theme-controller/theme-controller.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<ThemeController />`;
</script>

<svelte:head>
	<title>Svelte Components - Swap</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Theme Controller
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/theme-controller"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display>
		<ThemeController />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
