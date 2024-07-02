<script>
	import Collapse from '$lib/collapse/collapse.svelte';
	import { slide } from 'svelte/transition';

	let accordion = false;
	const handleClick = () => {
		accordion = !accordion;
	};
</script>

<svelte:head>
	<title>Svelte Components - Collapse</title>
</svelte:head>

<div class="flex justify-center">
	<Collapse title="Collapse">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus!
	</Collapse>
</div>
