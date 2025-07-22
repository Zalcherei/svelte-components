<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';

	let code = `<Footer class="relative">
    Copyright © {new Date().getFullYear()} - All right reserved by some company name
  </Footer>
  <Footer variant="shadow" class="relative">
    Copyright © {new Date().getFullYear()} - All right reserved by some company name
  </Footer>
  <Footer variant="outlined" class="relative">
    Copyright © {new Date().getFullYear()} - All right reserved by some company name
  </Footer>`;
</script>

<svelte:head>
	<title>Svelte Components - Footer</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Footer
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/footer"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<Footer class="relative">
			Copyright © {new Date().getFullYear()} - All right reserved by some company name
		</Footer>
		<Footer variant="shadow" class="relative">
			Copyright © {new Date().getFullYear()} - All right reserved by some company name
		</Footer>
		<Footer variant="outlined" class="relative">
			Copyright © {new Date().getFullYear()} - All right reserved by some company name
		</Footer>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
