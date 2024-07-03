<script>
	import Avatar from '$lib/avatar/avatar.svelte';
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

<div class="flex flex-col justify-center">
	<ChatBubble>
		<ChatBubbleItem alignment="start">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
		</ChatBubbleItem>
		<ChatBubbleItem alignment="end">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cum.
		</ChatBubbleItem>
	</ChatBubble>

	<Highlight {code} />
</div>
