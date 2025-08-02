<script lang="ts">
	import type { RadialProgressProps } from '$lib/types';
	import { cn } from '$lib/utils';

	let { class: className, progress = 0, theme }: RadialProgressProps = $props();
</script>

<div
	class={cn('flex h-16 w-16 items-center justify-center rounded-full', className)}
	style={theme === 'dark'
		? `background: radial-gradient(closest-side, rgb(38 38 38) 79%, transparent 80% 100%), conic-gradient(rgb(64 64 64) ${progress}%, rgb(82 82 82) 0)`
		: theme === 'light'
			? `background: radial-gradient(closest-side, rgb(243 244 246) 79%, transparent 80% 100%), conic-gradient(rgb(209 213 219) ${progress}%, rgb(229 231 235) 0)`
			: ''}
>
	{progress}%
</div>
