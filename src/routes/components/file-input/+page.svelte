<script>
	import FileInput from '$lib/file-input/file-input.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<FileInput />`;
</script>

<svelte:head>
	<title>Svelte Components - File input</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<FileInput />
	</div>
	<Highlight {code} />
</div>
