<script>
	import { base } from '$app/paths';
	import Button from '$lib/button/button.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import Hero from '$lib/hero/hero.svelte';
</script>

<svelte:head>
	<title>Svelte-Components - Home</title>
</svelte:head>

<Hero title="Svelte-Component" description="UI components made with svelte and Tailwind CSS">
	<div class="flex gap-2">
		<Button href="{base}/components">Get Started</Button>
		<Button href="https://github.com/Zalcherei/svelte-components" target="_blank">Github</Button>
	</div>
</Hero>
<Footer></Footer>
