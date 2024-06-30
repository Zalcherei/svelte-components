<svelte:head>
	<title>Svelte Components - Footer</title>
</svelte:head>

<div class="relative flex h-[calc(100vh-32px)] justify-center">
	<footer
		class="absolute bottom-0 flex h-10 w-full items-center justify-center bg-white dark:bg-neutral-800"
	>
		Copyright © {new Date().getFullYear()} - All right reserved by some company name
	</footer>
</div>
