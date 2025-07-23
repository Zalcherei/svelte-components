<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Stack from '$lib/stack/stack.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let code = `<Stack>
  	<Button label="Button 1" />
  	<Button label="Button 2" />
  	<Button label="Button 3" />
  </Stack>`;
</script>

<svelte:head>
	<title>Svelte Components - Stack</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Stack
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/stack"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Stack>
			<Button>Button</Button>
			<Button>Button</Button>
			<Button>Button</Button>
		</Stack>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
