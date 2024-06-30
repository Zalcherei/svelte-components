<script>
	import { onMount } from 'svelte';

	let targetDate = new Date(new Date().getTime() + 60000); // one minute
	let time = targetDate - new Date();
	let interval;

	const updateTimer = () => {
		const now = new Date();
		time = targetDate - now;
		if (time <= 0) {
			clearInterval(interval);
			time = 0;
		}
	};

	onMount(() => {
		interval = setInterval(updateTimer, 1000);
		return () => clearInterval(interval);
	});

	const formatTime = (ms) => {
		const totalSeconds = Math.floor(ms / 1000);
		const seconds = totalSeconds % 60;
		const minutes = Math.floor(totalSeconds / 60) % 60;
		const hours = Math.floor(totalSeconds / 3600);

		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};
</script>

<svelte:head>
	<title>Svelte Components - Countdown</title>
</svelte:head>

<div class="flex justify-center">
	<div class="">{formatTime(time)}</div>
</div>
