<script lang="ts">
	import { cn } from '$lib/utils';
	import type { RadioProps } from '$lib/radio/types';

	let { class: className, checked = false, name }: RadioProps = $props();
</script>

<input class={cn('me-1 h-5 w-5 cursor-pointer', className)} type="radio" {name} {checked} />
