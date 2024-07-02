<script>
	import Button from '$lib/button/button.svelte';
	import CardContent from '$lib/card/card-content.svelte';
	import CardFooter from '$lib/card/card-footer.svelte';
	import CardHeader from '$lib/card/card-header.svelte';
	import Card from '$lib/card/card.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

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
  </Card>`;
</script>

<svelte:head>
	<title>Svelte Components - Card</title>
</svelte:head>

<div class="flex flex-col justify-center">
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
	<Highlight {code} />
</div>
