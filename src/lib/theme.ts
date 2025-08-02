import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let initial = 'light';

if (browser) {
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	initial = localStorage.getItem('theme') ?? (prefersDark ? 'dark' : 'light');
}

export const theme = writable(initial);

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	});
}
