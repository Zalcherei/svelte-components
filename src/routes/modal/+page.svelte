<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import Modal from '$lib/modal/modal.svelte';
	import XIcon from '$lib/icons/x.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import HighlightCode from '$lib/highlight/highlight-code.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
	import HighlightHeader from '$lib/highlight/highlight-header.svelte';
	import ModalFooter from '$lib/modal/modal-footer.svelte';
	import ModalContent from '$lib/modal/modal-content.svelte';
	import ModalHeader from '$lib/modal/modal-header.svelte';

	let modal: boolean = false;

	const handleClick = () => {
		modal = !modal;
	};

	let code = `<Modal let:Header let:Content let:Footer>
  	<Header>
  		<h4 class="font-medium">Modal</h4>
  		<Button size="icon" variant="text" icon={XIcon} on:click={handleClick} />
  	</Header>
  	<Content>
  		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis nobis ex magnam
  		ab dolor quasi necessitatibus enim vel quo?
  	</Content>
  	<Footer>
     	<Button class="me-1" variant="text" label="Accept" on:click={handleClick} />
     	<Button class="me-1" variant="text" label="Cancel" on:click={handleClick} />
  	</Footer>
  </Modal>`;
</script>

<svelte:head>
	<title>Svelte Components - Modal</title>
	<meta name="description" content="Svelte-Components" />
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight>
	<HighlightHeader>
		Modal
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/modal"
			target="_blank"
		>
			<GithubIcon />
		</Button>
	</HighlightHeader>
	<HighlightDisplay>
		<Button onclick={handleClick}>Modal</Button>
		{#if modal}
			<Modal>
				<ModalHeader>
					<h4 class="font-medium">Modal</h4>
					<Button size="icon" variant="text" onclick={handleClick}>
						<XIcon />
					</Button>
				</ModalHeader>
				<ModalContent>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis nobis ex magnam
					ab dolor quasi necessitatibus enim vel quo?
				</ModalContent>
				<ModalFooter>
					<Button class="me-1" variant="text" onclick={handleClick}>Accept</Button>
					<Button class="me-1" variant="text" onclick={handleClick}>Cancel</Button>
				</ModalFooter>
			</Modal>
		{/if}
	</HighlightDisplay>
	<HighlightCode {code} />
</Highlight>
