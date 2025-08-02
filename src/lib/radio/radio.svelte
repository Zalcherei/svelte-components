<script lang="ts">
	import { cn } from '$lib/utils';
	import CircleIcon from '$lib/icons/circle.svelte';
	import CircleDotIcon from '$lib/icons/circle-dot.svelte';
	import type { RadioProps } from '$lib/types';

	let { value, name, group = $bindable(), class: className, ...restProps }: RadioProps = $props();
</script>

<label class={cn('inline-flex cursor-pointer items-center', className)} {...restProps}>
	<input type="radio" {name} {value} bind:group class="peer sr-only" {...restProps} />
	<CircleIcon class="h-5 w-5 peer-checked:hidden" />
	<CircleDotIcon class="hidden h-5 w-5 peer-checked:inline" />
</label>
