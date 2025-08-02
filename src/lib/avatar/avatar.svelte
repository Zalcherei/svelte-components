<script lang="ts">
	import type { AvatarProps } from '$lib/types';
	import { cn } from '$lib/utils';

	const { src, alt, class: className }: AvatarProps = $props();
</script>

<img class={cn('rounded-full', className)} {alt} {src} />
