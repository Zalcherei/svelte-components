<script>
  import Button from '$lib/button/button.svelte';
  import Card from '$lib/card/card.svelte';
  import CardContent from '$lib/card/card-content.svelte';
	import CardFooter from '$lib/card/card-footer.svelte';
	import CardHeader from '$lib/card/card-header.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';
</script>

<svelte:head>
	<title>Svelte Components - Card</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Card" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/card">
{#snippet display()}
<Card>
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
{/snippet}

```html
<Card>
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
```
</Mdsvex>
