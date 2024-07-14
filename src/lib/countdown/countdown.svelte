<script lang="ts">
	import { onMount } from 'svelte';

	export let timer: number = 0;
	let targetDate: Date = new Date(new Date().getTime() + timer); // one minute
	let time: number = targetDate.getTime() - new Date().getTime();
	let interval: number;

	const updateTimer = () => {
		const now: Date = new Date();
		time = targetDate.getTime() - now.getTime();
		if (time <= 0) {
			clearInterval(interval);
			time = 0;
		}
	};

	onMount(() => {
		interval = setInterval(updateTimer, 1000);
		return () => clearInterval(interval);
	});

	const formatTime = (ms: number) => {
		const totalSeconds = Math.floor(ms / 1000);
		const seconds = totalSeconds % 60;
		const minutes = Math.floor(totalSeconds / 60) % 60;
		const hours = Math.floor(totalSeconds / 3600);

		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};
</script>

<div class="">{formatTime(time)}</div>
