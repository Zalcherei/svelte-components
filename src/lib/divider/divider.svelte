<script lang="ts">
	import type { DividerProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { class: className }: DividerProps = $props();
</script>

<div class={cn('h-px w-full bg-primary', className)}></div>
