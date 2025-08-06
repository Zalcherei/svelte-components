<script>
	import Button from '$lib/button/button.svelte';
	import Card from '$lib/card/card.svelte';
	import CardHeader from '$lib/card/card-header.svelte';
	import CardContent from '$lib/card/card-content.svelte';
	import CardFooter from '$lib/card/card-footer.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

	const { children, title, url, display } = $props();
</script>

<Card class="overflow-hidden">
	<CardHeader>
		<h4 class="text-lg font-medium">{title}</h4>
		<Button variant="ghost" href={url} target="_blank">
			<GithubIcon />
		</Button>
	</CardHeader>
	<CardContent class="flex justify-center">
		{@render display?.()}
	</CardContent>
	<CardFooter class="h-auto p-0">
		{@render children?.()}
	</CardFooter>
</Card>
