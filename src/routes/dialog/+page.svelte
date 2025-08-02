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

	let open = $state(false);
</script>

<svelte:head>
	<title>Svelte Components - Dialog</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<Highlight>
	<HighlightTitle>
		Dialog
		<Button
			variant="ghost"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dialog"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightTitle>
	<HighlightDisplay>
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
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
