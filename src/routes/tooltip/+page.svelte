<script>
	import Button from '$lib/button/button.svelte';
	import Tooltip from '$lib/tooltip/tooltip.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Tooltip</title>
</svelte:head>

<div class="flex justify-center">
	<div class="flex flex-col gap-1">
		<Button class="group relative">
			Left
			<Tooltip align="left">Left tooltip</Tooltip>
		</Button>
		<Button class="group relative">
			Top
			<Tooltip align="top">Top tooltip</Tooltip>
		</Button>
		<Button class="group relative">
			Bottom
			<Tooltip align="bottom">Bottom tooltip</Tooltip>
		</Button>
		<Button class="group relative">
			Right
			<Tooltip align="right">Right tooltip</Tooltip>
		</Button>
	</div>
</div>
