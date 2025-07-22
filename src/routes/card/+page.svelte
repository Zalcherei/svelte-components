<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Card from '$lib/card/card.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';
	import CardContent from '$lib/card/card-content.svelte';
	import CardFooter from '$lib/card/card-footer.svelte';
	import CardHeader from '$lib/card/card-header.svelte';

	let code = `<Card let:Header let:Content let:Footer>
  	<Header>Card</Header>
  	<Content>
  		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
  		dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
  	</Content>
  	<Footer>
  		<Button label="Accept" variant="text" />
  		<Button label="Decline" variant="text" />
  	</Footer>
  </Card>
  <Card let:Content variant="shadow">
  	<Content>Card</Content>
  </Card>
  <Card let:Content variant="outlined">
  	<Content>Card</Content>
  </Card>`;
</script>

<svelte:head>
	<title>Svelte Components - Card</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Card
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/card"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay class="p-4">
		<Card>
			<CardHeader>Card</CardHeader>
			<CardContent>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
				dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
			</CardContent>
			<CardFooter>
				<Button variant="text">Accept</Button>
				<Button variant="text">Decline</Button>
			</CardFooter>
		</Card>
		<Card variant="shadow">
			<CardContent>Card</CardContent>
		</Card>
		<Card variant="outlined">
			<CardContent>Card</CardContent>
		</Card>
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
