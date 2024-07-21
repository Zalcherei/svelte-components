<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Card from '$lib/card/card.svelte';
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

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
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Card
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/card"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<Card let:Header let:Content let:Footer>
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
		</Card>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
