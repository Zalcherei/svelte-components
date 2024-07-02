<script>
	import Button from '$lib/button/button.svelte';
	import Indicator from '$lib/indicator/indicator.svelte';
	import Join from '$lib/join/join.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Join</title>
</svelte:head>

<div class="relative flex h-[calc(100vh-32px)] justify-center gap-2">
	<Join direction="horizontal">
		<Button>Button</Button>
		<Button>Button</Button>
		<Button class="relative">
			Button
			<Indicator />
		</Button>
	</Join>
	<Join direction="vertical">
		<Button class="relative">
			Button
			<Indicator />
		</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</Join>
</div>
