<script>
	import Countdown from '$lib/countdown/countdown.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Countdown timer={60000} />`;
</script>

<svelte:head>
	<title>Svelte Components - Countdown</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Countdown timer={60000} />
	</div>
	<Highlight {code} />
</div>
