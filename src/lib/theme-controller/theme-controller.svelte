<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '$lib/button/button.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import Sun from '$lib/icons/sun.svelte';

	export let variant: string = '';
	let darkMode: boolean = false;

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

<Button {variant} size="icon" on:click={handleAction}>
	{#if darkMode}
		<Moon />
	{:else}
		<Sun />
	{/if}
</Button>
