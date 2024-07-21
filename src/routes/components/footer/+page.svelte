<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

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
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Footer
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/footer"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Footer class="relative">
			Copyright © {new Date().getFullYear()} - All right reserved by some company name
		</Footer>
		<Footer variant="shadow" class="relative">
			Copyright © {new Date().getFullYear()} - All right reserved by some company name
		</Footer>
		<Footer variant="outlined" class="relative">
			Copyright © {new Date().getFullYear()} - All right reserved by some company name
		</Footer>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
