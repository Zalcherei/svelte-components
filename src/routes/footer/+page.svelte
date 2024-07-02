<script>
	import Footer from '$lib/footer/footer.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Footer</title>
</svelte:head>

<div class="relative flex h-[calc(100vh-32px)] justify-center">
	<Footer>
		Copyright © {new Date().getFullYear()} - All right reserved by some company name
	</Footer>
</div>
