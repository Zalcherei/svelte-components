<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Carousel from '$lib/carousel/carousel.svelte';

	let images = [
		'https://picsum.photos/800/300?1',
		'https://picsum.photos/800/300?2',
		'https://picsum.photos/800/300?3',
		'https://picsum.photos/800/300?4',
		'https://picsum.photos/800/300?5'
	];

	let code = `<Carousel {images} />`;
</script>

<svelte:head>
	<title>Svelte Components - Carousel</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Carousel
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/carousel"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Carousel {images} />
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
