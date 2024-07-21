<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Textarea from '$lib/textarea/textarea.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Textarea resize="resize/x/y/resize-none" placeholder="What's on your mind?"></Textarea>`;
</script>

<svelte:head>
	<title>Svelte Components - Textarea</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Textarea
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/textarea"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Textarea resize="resize-none" placeholder="What's on your mind?"></Textarea>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
