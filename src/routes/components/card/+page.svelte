<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Card from '$lib/card/card.svelte';
	import Button from '$lib/button/button.svelte';
	import CardContent from '$lib/card/card-content.svelte';
	import CardFooter from '$lib/card/card-footer.svelte';
	import CardHeader from '$lib/card/card-header.svelte';

	let code = `<Card>
    <CardHeader>Card</CardHeader>
    <CardContent>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam, dignissimos
      reprehenderit eligendi natus at. Minus, eaque possimus!
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
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Card>
		<CardHeader>Card</CardHeader>
		<CardContent>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam, dignissimos
			reprehenderit eligendi natus at. Minus, eaque possimus!
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
	</Card>
</HighlightDisplay>
<Highlight {code} />
