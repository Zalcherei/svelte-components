<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toast from '$lib/toast/toast.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Toast>Toast</Toast>`;
</script>

<svelte:head>
	<title>Svelte Components - Toast</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Toast
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/toast"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Toast class="!relative">Toast</Toast>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
