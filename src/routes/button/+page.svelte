<script>
	import Button from '$lib/button/button.svelte';
	import Home from 'lucide-svelte/icons/house';
</script>

<svelte:head>
	<title>Svelte Components - Button</title>
</svelte:head>

<div class="flex justify-center">
	<Button>Button</Button>
	<Button size="icon">
		<Home class="h-5 w-5" />
	</Button>
</div>
