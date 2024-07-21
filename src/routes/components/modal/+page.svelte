<script lang="ts">
	import Highlight from '$lib/highlight/highlight.svelte';
	import Button from '$lib/button/button.svelte';
	import Modal from '$lib/modal/modal.svelte';
	import XIcon from '$lib/icons/x.svelte';
	import GithubIcon from '$lib/icons/github.svelte';

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
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Modal
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/modal"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display>
		<Button on:click={handleClick} label="Modal" />
		{#if modal}
			<Modal let:Header let:Content let:Footer>
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
			</Modal>
		{/if}
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
