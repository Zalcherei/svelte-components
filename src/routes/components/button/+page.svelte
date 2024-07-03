<script>
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Home from 'lucide-svelte/icons/house';

	let code = `<Button>Button</Button>
  <Button size="icon">
    <Home class="h-5 w-5" />
  </Button>`;
</script>

<svelte:head>
	<title>Svelte Components - Button</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Button>Button</Button>
		<Button size="icon">
			<Home class="h-5 w-5" />
		</Button>
	</div>
	<Highlight {code} />
</div>
