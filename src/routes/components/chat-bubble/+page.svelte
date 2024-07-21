<script lang="ts">
	import Button from '$lib/button/button.svelte';
	import GithubIcon from '$lib/icons/github.svelte';
	import ChatBubbleItem from '$lib/chat-bubble/chat-bubble-item.svelte';
	import ChatBubble from '$lib/chat-bubble/chat-bubble.svelte';
	import Highlight from '$lib/highlight/highlight.svelte';

	let code = `<ChatBubble>
    <ChatBubbleItem alignment="start">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
    </ChatBubbleItem>
    <ChatBubbleItem alignment="end">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
    </ChatBubbleItem>
  </ChatBubble>`;
</script>

<svelte:head>
	<title>Svelte Components - Chat Bubble</title>
</svelte:head>

<h3 class="mb-4 text-3xl">Usage</h3>

<Highlight let:Header let:Display let:Options let:Code>
	<Header>
		Chat Bubble
		<Button
			variant="text"
			size="icon"
			href="https://github.com/Zalcherei/svelte-components/tree/main/src/lib/chat-bubble"
			target="_blank"
			icon={GithubIcon}
		/>
	</Header>
	<Display class="p-4">
		<ChatBubble>
			<ChatBubbleItem alignment="start">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
			</ChatBubbleItem>
			<ChatBubbleItem alignment="end">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
			</ChatBubbleItem>
		</ChatBubble>
	</Display>
	<Options></Options>
	<Code {code} />
</Highlight>
