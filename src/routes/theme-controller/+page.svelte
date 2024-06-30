<script>
	import { browser } from '$app/environment';
	import Moon from 'lucide-svelte/icons/moon';
	import Sun from 'lucide-svelte/icons/sun';

	let darkMode = false;

	const handleAction = () => {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<svelte:head>
	<title>Svelte Components - Swap</title>
</svelte:head>

<div class="flex justify-center">
	<button
		class="me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
		on:click={handleAction}
	>
		{#if darkMode}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</button>
</div>
