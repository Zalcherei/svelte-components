<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import type { CountdownProps } from '$lib/countdown/types';

	const { timer = 0, class: className }: CountdownProps = $props();

	// Initialize state
	let targetDate = $state(new Date(Date.now() + timer));
	let timeLeft = $state(timer); // Start with initial timer value

	// Formatting function (pure, no state changes)
	const formatTime = (ms: number) => {
		ms = Math.max(0, ms);
		const totalSeconds = Math.floor(ms / 1000);
		const seconds = totalSeconds % 60;
		const minutes = Math.floor(totalSeconds / 60) % 60;
		const hours = Math.floor(totalSeconds / 3600);
		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};

	// Handle countdown logic
	onMount(() => {
		const interval = setInterval(() => {
			const now = Date.now();
			timeLeft = targetDate.getTime() - now;

			if (timeLeft <= 0) {
				timeLeft = 0;
				clearInterval(interval);
			}
		}, 1000);

		return () => clearInterval(interval);
	});

	// Reset if timer prop changes (using reactive statement)
	$effect(() => {
		targetDate = new Date(Date.now() + timer);
		timeLeft = timer; // Reset to initial value
	});
</script>

<div class={cn(className, timeLeft === 0 && 'text-red-500')}>{formatTime(timeLeft)}</div>
