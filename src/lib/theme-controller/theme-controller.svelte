<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import MoonIcon from '$lib/icons/moon.svelte';
	import SunIcon from '$lib/icons/sun.svelte';
	import { theme } from '$lib/theme';
	import { get } from 'svelte/store';

	let darkMode = $state(false);

	function toggleTheme() {
		theme.set(get(theme) === 'dark' ? 'light' : 'dark');
		darkMode = !darkMode;
	}
</script>

<Button variant="ghost" size="icon" onclick={toggleTheme}>
	{#if darkMode}
		<MoonIcon />
	{:else}
		<SunIcon />
	{/if}
</Button>
