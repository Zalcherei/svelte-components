<svelte:head>
	<title>Svelte Components - Progress</title>
</svelte:head>

<div class="flex justify-center">
	<progress class="apperance-none h-3 overflow-hidden rounded-md" value="10" max="100"></progress>
</div>

<style>
	::-webkit-progress-bar {
		background-color: rgb(209 213 219);
	}
	::-webkit-progress-value {
		background-color: rgb(156 163 175);
	}
</style>
