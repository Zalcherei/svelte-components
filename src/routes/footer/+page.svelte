<script>
	import Footer from '$lib/footer/footer.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Footer class="relative">
    Copyright © {new Date().getFullYear()} - All right reserved by some company name
  </Footer>`;
</script>

<svelte:head>
	<title>Svelte Components - Footer</title>
</svelte:head>

<div class="relative flex flex-col justify-center">
	<Footer class="relative">
		Copyright © {new Date().getFullYear()} - All right reserved by some company name
	</Footer>
	<Highlight {code} />
</div>
