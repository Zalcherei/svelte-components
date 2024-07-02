<script>
	import Countdown from '$lib/countdown/countdown.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Countdown</title>
</svelte:head>

<div class="flex justify-center">
	<Countdown timer={60000} />
</div>
