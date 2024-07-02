<script>
	import Highlight from '$lib/highlight/highlight.svelte';
	import Toast from '$lib/toast/toast.svelte';

	let code = `<Toast>Toast</Toast>`;
</script>

<svelte:head>
	<title>Svelte Components - Toast</title>
</svelte:head>

<div class="relative flex flex-col justify-center">
	<div class="flex items-center justify-center">
		<Toast class="!relative">Toast</Toast>
	</div>
	<Highlight {code} />
</div>
