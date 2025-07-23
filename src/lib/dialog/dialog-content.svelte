<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ModalContentProps } from '$lib/dialog/types';

	let { children, class: className }: ModalContentProps = $props();
</script>

<div class={cn('p-4', className)}>
	{@render children?.()}
</div>
