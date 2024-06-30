<script>
	let progress = 75;
</script>

<svelte:head>
	<title>Svelte Components - Radial progress</title>
</svelte:head>

<div class="flex justify-center">
	<div
		class="flex h-16 w-16 items-center justify-center rounded-full"
		style="background: radial-gradient(closest-side, rgb(243 244 246) 79%, transparent 80% 100%),
			conic-gradient(rgb(209 213 219) {progress}%, rgb(229 231 235) 0)"
	>
		75%
	</div>
</div>
