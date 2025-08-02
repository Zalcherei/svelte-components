<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import ImageComparison from '$lib/image-comparison/image-comparison.svelte';

	let code = `<ImageComparison
  before="https://picsum.photos/id/800/800?grayscale"
  after="https://picsum.photos/id/800/800"
  beforeAlt="Original design"
  afterAlt="Redesigned version"
  initialPosition={50}
/>`;
</script>

<svelte:head>
	<title>Svelte Components - Image Comparison</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Image Comparison
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/image-comparison"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<ImageComparison
			before="https://picsum.photos/id/800/800?grayscale"
			after="https://picsum.photos/id/800/800"
			beforeAlt="Original design"
			afterAlt="Redesigned version"
			initialPosition={50}
		/>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
