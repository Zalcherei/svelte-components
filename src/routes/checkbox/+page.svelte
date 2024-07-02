<script>
	import Checkbox from '$lib/checkbox/checkbox.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<Checkbox>Checkbox</Checkbox>`;
</script>

<svelte:head>
	<title>Svelte Components - Checkbox</title>
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Checkbox>Checkbox</Checkbox>
	</div>
	<Highlight {code} />
</div>
