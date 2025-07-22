<script lang="ts">
	import Avatar from '$lib/avatar/avatar.svelte';
	import type { ChatBubbleItemProps } from '$lib/chat-bubble/types';

	let { children, alignment }: ChatBubbleItemProps = $props();
</script>

{#if alignment === 'start'}
	<div class="flex w-full justify-start gap-2">
		<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
		<div class="flex w-64 items-center rounded-md bg-white p-4 dark:bg-neutral-800">
			{@render children?.()}
		</div>
	</div>
{:else if alignment === 'end'}
	<div class="flex w-full justify-end gap-2">
		<div class="flex w-64 items-center rounded-md bg-white p-4 dark:bg-neutral-800">
			{@render children?.()}
		</div>
		<Avatar size="md" alt="medium" src="https://picsum.photos/48/48" />
	</div>
{/if}
