<script>
	import Button from '$lib/button/button.svelte';
	import Dialog from '$lib/dialog/dialog.svelte';
	import DialogFooter from '$lib/dialog/dialog-footer.svelte';
	import DialogContent from '$lib/dialog/dialog-content.svelte';
	import DialogHeader from '$lib/dialog/dialog-header.svelte';
	import XIcon from '$lib/icons/x.svelte';
	import Mdsvex from '$lib/highlight/mdsvex.svelte';

	let open = $state(false);
</script>

<svelte:head>
	<title>Svelte Components - Dialog</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Mdsvex title="Dialog" url="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dialog">
{#snippet display()}
<Button onclick={() => (open = !open)}>Dialog</Button>
{#if open}
	<Dialog>
		<DialogHeader>
			<h4 class="font-medium">Dialog</h4>
			<Button onclick={() => (open = !open)}>
				<XIcon />
			</Button>
		</DialogHeader>
		<DialogContent>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis nobis ex magnam
			ab dolor quasi necessitatibus enim vel quo?
		</DialogContent>
		<DialogFooter>
			<Button class="me-1" onclick={() => (open = !open)}>Accept</Button>
			<Button class="me-1" onclick={() => (open = !open)}>Cancel</Button>
		</DialogFooter>
	</Dialog>
{/if}
{/snippet}

```html
<Button onclick={() => (open = !open)}>Dialog</Button>
{#if open}
	<Dialog>
		<DialogHeader>
			<h4 class="font-medium">Dialog</h4>
			<Button onclick={() => (open = !open)}>
				<XIcon />
			</Button>
		</DialogHeader>
		<DialogContent>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit.
			Debitis officiis nobis ex magnam ab dolor quasi necessitatibus enim vel quo?
		</DialogContent>
		<DialogFooter>
			<Button class="me-1" onclick={() => (open = !open)}>Accept</Button>
			<Button class="me-1" onclick={() => (open = !open)}>Cancel</Button>
		</DialogFooter>
	</Dialog>
{/if}
```
</Mdsvex>
