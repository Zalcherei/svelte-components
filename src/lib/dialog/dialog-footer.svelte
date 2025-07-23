<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ModalFooterProps } from '$lib/dialog/types';

	let { children, class: className }: ModalFooterProps = $props();
</script>

<div class={cn('flex h-16 w-full items-center border-t border-gray-200 px-4', className)}>
	{@render children?.()}
</div>
