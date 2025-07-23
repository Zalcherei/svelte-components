<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import Dialog from '$lib/dialog/dialog.svelte';
	import DialogFooter from '$lib/dialog/dialog-footer.svelte';
	import DialogContent from '$lib/dialog/dialog-content.svelte';
	import DialogHeader from '$lib/dialog/dialog-header.svelte';
	import XIcon from '$lib/icons/x.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightTitle from '$lib/highlight/highlight-title.svelte';

	let dialog = $state(false);

	let code = `<Dialog>
    <DialogHeader>
      <h4 class="font-medium">Modal</h4>
      <Button onclick={handleClick}>
        <XIcon />
      </Button>
    </DialogHeader>
    <DialogContent>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis nobis ex magnam
      ab dolor quasi necessitatibus enim vel quo?
    </DialogContent>
    <DialogFooter>
      <Button class="me-1" onclick={handleClick}>Accept</Button>
      <Button class="me-1" onclick={handleClick}>Cancel</Button>
    </DialogFooter>
</Dialog>`;
</script>

<svelte:head>
	<title>Svelte Components - Dialog</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightTitle>
		Dialog
		<Button
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dialog"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
		<Button onclick={() => (dialog = !dialog)}>Dialog</Button>
		{#if dialog}
			<Dialog>
				<DialogHeader>
					<h4 class="font-medium">Dialog</h4>
					<Button onclick={() => (dialog = !dialog)}>
						<XIcon />
					</Button>
				</DialogHeader>
				<DialogContent>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis nobis ex magnam
					ab dolor quasi necessitatibus enim vel quo?
				</DialogContent>
				<DialogFooter>
					<Button class="me-1" onclick={() => (dialog = !dialog)}>Accept</Button>
					<Button class="me-1" onclick={() => (dialog = !dialog)}>Cancel</Button>
				</DialogFooter>
			</Dialog>
		{/if}
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
