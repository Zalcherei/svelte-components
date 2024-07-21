<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Avatar from '$lib/avatar/avatar.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	let code = `<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
  <Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
  <Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />`;
</script>

<svelte:head>
	<title>Svelte Components - Avatar</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Avatar
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/avatar"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display>
		<div class="flex items-center gap-2">
			<Avatar size="lg" alt="large" src="https://picsum.photos/64/64" />
			<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
			<Avatar size="sm" alt="small" src="https://picsum.photos/32/32" />
		</div>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
