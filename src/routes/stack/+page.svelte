<script>
	import Button from '$lib/button/button.svelte';
	import CardContent from '$lib/card/card-content.svelte';
	import CardFooter from '$lib/card/card-footer.svelte';
	import CardHeader from '$lib/card/card-header.svelte';
	import Card from '$lib/card/card.svelte';
	import Stack from '$lib/stack/stack.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Stack</title>
</svelte:head>

<div class="flex justify-center">
	<Stack>
		<Card>
			<CardHeader>
				<div>Card</div>
			</CardHeader>
			<CardContent>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
				dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
			</CardContent>
			<CardFooter>
				<Button>Accept</Button>
				<Button>Decline</Button>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<div>Card</div>
			</CardHeader>
			<CardContent>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
				dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
			</CardContent>
			<CardFooter>
				<Button>Accept</Button>
				<Button>Decline</Button>
			</CardFooter>
		</Card>
		<Card>
			<CardHeader>
				<div>Card</div>
			</CardHeader>
			<CardContent>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
				dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
			</CardContent>
			<CardFooter>
				<Button>Accept</Button>
				<Button>Decline</Button>
			</CardFooter>
		</Card>
	</Stack>
</div>
