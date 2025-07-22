<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ChatBubbleProps } from '$lib/chat-bubble/types';

	let { children, class: className }: ChatBubbleProps = $props();
</script>

<div class={cn('flex w-full flex-col', className)}>
	{@render children?.()}
</div>
