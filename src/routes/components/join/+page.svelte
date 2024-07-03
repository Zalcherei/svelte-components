<script>
	import Button from '$lib/button/button.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Indicator from '$lib/indicator/indicator.svelte';
	import Join from '$lib/join/join.svelte';

	let code = `<Join direction="horizontal">
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
  </Join>`;
</script>

<svelte:head>
	<title>Svelte Components - Join</title>
</svelte:head>

<div class="relative flex flex-col justify-center">
	<div class="flex justify-center gap-2">
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
	<Highlight {code} />
</div>
