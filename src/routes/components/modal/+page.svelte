<script>
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import ModalContent from '$lib/modal/modal-content.svelte';
	import ModalFooter from '$lib/modal/modal-footer.svelte';
	import ModalHeader from '$lib/modal/modal-header.svelte';
	import Modal from '$lib/modal/modal.svelte';
	import X from 'lucide-svelte/icons/x';

	let modal = false;
	const handleClick = () => {
		modal = !modal;
	};

	let code = `<Modal>
    <ModalHeader>
      <h4 class="font-medium">Modal</h4>
      <Button size="icon" on:click={handleClick}>
        <X class="h-5 w-5" />
      </Button>
    </ModalHeader>
    <ModalContent>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis nobis ex magnam
      ab dolor quasi necessitatibus enim vel quo?
    </ModalContent>
    <ModalFooter>
      <Button on:click={handleClick}>Accept</Button>
      <Button on:click={handleClick}>Cancel</Button>
    </ModalFooter>
  </Modal>`;
</script>

<svelte:head>
	<title>Svelte Components - Modal</title>
</svelte:head>

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay class="flex-col">
	<Button on:click={handleClick}>Modal</Button>
	{#if modal}
		<Modal>
			<ModalHeader>
				<h4 class="font-medium">Modal</h4>
				<Button size="icon" on:click={handleClick}>
					<X class="h-5 w-5" />
				</Button>
			</ModalHeader>
			<ModalContent>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis nobis ex magnam
				ab dolor quasi necessitatibus enim vel quo?
			</ModalContent>
			<ModalFooter>
				<Button class="me-1" on:click={handleClick}>Accept</Button>
				<Button class="me-1" on:click={handleClick}>Cancel</Button>
			</ModalFooter>
		</Modal>
	{/if}
</HighlightDisplay>
<Highlight {code} />
