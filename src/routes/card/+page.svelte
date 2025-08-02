<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Card from '$lib/card/card.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';
	import CardContent from '$lib/card/card-content.svelte';
	import CardFooter from '$lib/card/card-footer.svelte';
	import CardHeader from '$lib/card/card-header.svelte';

	let code = `<Card>
  <CardHeader>Card</CardHeader>
  <CardContent>
  	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
  	dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
  </CardContent>
  <CardFooter>
  	<Button>Accept</Button>
  	<Button>Decline</Button>
  </CardFooter>
</Card>
<Card variant="shadow">
  <CardContent>Card</CardContent>
</Card>
<Card variant="outlined">
  <CardContent>Card</CardContent>
</Card>`;
</script>

<svelte:head>
	<title>Svelte Components - Card</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Card
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/card"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Card class="mb-1">
			<CardHeader>Card</CardHeader>
			<CardContent>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
				dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
			</CardContent>
			<CardFooter>
				<Button>Accept</Button>
				<Button>Decline</Button>
			</CardFooter>
		</Card>
		<Card class="mb-1">
			<CardContent>Card</CardContent>
		</Card>
		<Card>
			<CardContent>Card</CardContent>
		</Card>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
