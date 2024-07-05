<script>
	import Avatar from '$lib/avatar/avatar.svelte';
	import ChatBubbleItem from '$lib/chat-bubble/chat-bubble-item.svelte';
	import ChatBubble from '$lib/chat-bubble/chat-bubble.svelte';
	import HighlightDisplay from '$lib/highlight/highlight-display.svelte';
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

<h3 clasS="text-3xl mb-4">Default Usage</h3>

<HighlightDisplay>
	<ChatBubble>
		<ChatBubbleItem alignment="start">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
		</ChatBubbleItem>
		<ChatBubbleItem alignment="end">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
		</ChatBubbleItem>
	</ChatBubble>
</HighlightDisplay>
<Highlight {code} />
