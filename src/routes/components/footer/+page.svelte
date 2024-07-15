<script lang="ts">
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Footer from '$lib/footer/footer.svelte';

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

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
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
<Highlight {code} />
