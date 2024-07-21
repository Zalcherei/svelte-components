<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Countdown from '$lib/countdown/countdown.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Countdown timer={60000} />`;
</script>

<svelte:head>
	<title>Svelte Components - Countdown</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Countdown
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/countdown"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Countdown timer={60000} />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
